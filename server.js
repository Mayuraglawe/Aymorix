require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'code.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'product.html'));
});
app.use(express.urlencoded({ extended: true }));

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const requestCounts = {};
function rateLimit(req, res, next) {
    const ip = req.ip;
    const now = Date.now();
    if (!requestCounts[ip]) requestCounts[ip] = [];
    requestCounts[ip] = requestCounts[ip].filter(t => now - t < 60000);
    if (requestCounts[ip].length >= 5) {
        return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
    }
    requestCounts[ip].push(now);
    next();
}

app.post('/contact', rateLimit, (req, res) => {
    const { firstName, lastName, email, program, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    // Sanitize and build submission object
    const submission = {
        id: Date.now(),
        firstName:  firstName.trim().substring(0, 100),
        lastName:   lastName.trim().substring(0, 100),
        email:      email.trim().substring(0, 200),
        program:    (program || 'Not specified').trim().substring(0, 100),
        message:    message.trim().substring(0, 2000),
        submittedAt: new Date().toISOString()
    };

    // Persist submission to JSON file
    let submissions = [];
    if (fs.existsSync(SUBMISSIONS_FILE)) {
        try { submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8')); }
        catch (e) { submissions = []; }
    }
    submissions.push(submission);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    // Send email notification if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from:    process.env.EMAIL_USER,
            to:      process.env.EMAIL_TO || process.env.EMAIL_USER,
            replyTo: submission.email,
            subject: `New Inquiry from ${submission.firstName} ${submission.lastName}`,
            text:
                `Name:    ${submission.firstName} ${submission.lastName}\n` +
                `Email:   ${submission.email}\n` +
                `Program: ${submission.program}\n\n` +
                `Message:\n${submission.message}`
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) console.error('Email send error:', err.message);
        });
    }

    res.json({ success: true, message: "Thank you! Your message has been received. We'll get back to you soon." });
});

app.listen(PORT, () => {
    console.log(`Aymorix server running at http://localhost:${PORT}`);
});
