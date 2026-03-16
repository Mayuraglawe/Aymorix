from pathlib import Path
p = Path(r'C:\Users\HP\Downloads\stitch\src\app\page.tsx')
text = p.read_text(encoding='utf-8')
repl = [
    ('bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 shadow-sm','bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'),
    ('text-slate-300 hover:text-teal-400','text-slate-600 hover:text-teal-500'),
    ('text-slate-800 hover:text-slate-950','text-slate-700 hover:text-slate-900'),
    ('md:hidden bg-[#0F172A] border-t border-slate-800 px-6 pb-6','md:hidden bg-white border-t border-slate-200 px-6 pb-6'),
    ('bg-gradient-to-b from-transparent to-[#0F172A]','bg-gradient-to-b from-transparent to-[#f8fafc]'),
    ('bg-slate-900/10 border border-slate-900/10','bg-slate-100/70 border border-slate-200'),
    ('text-slate-900/40','text-slate-500'),
    ('text-slate-800 leading-[1.05] mb-6','text-slate-900 leading-[1.05] mb-6'),
    ('text-slate-700 mb-10','text-slate-600 mb-10'),
    ('bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-800 hover:shadow-xl hover:shadow-teal-500/10 cursor-default','bg-white rounded-2xl p-8 text-center border border-slate-200 hover:shadow-xl hover:shadow-teal-200/20 cursor-default'),
    ('bg-[#0F172A]','bg-slate-50'),
    ('bg-[#0A1628]','bg-slate-100'),
    ('bg-[#020617]','bg-slate-100'),
    ('from-[#0F172A]','from-slate-100'),
    ('to-[#020617]','to-slate-100'),
    ('border-slate-800','border-slate-200'),
    ('text-white','text-slate-900'),
    ('text-slate-400','text-slate-600'),
    ('text-slate-300','text-slate-500'),
    ('text-slate-200','text-slate-600'),
    ('bg-[#615C5B]','bg-teal-50'),
    ('bg-[#0F172A]/5','bg-slate-100/5'),
    ('border-white/5','border-slate-200/50'),
    ('className="w-full overflow-x-hidden bg-[#0F172A]"','className="w-full overflow-x-hidden bg-slate-50"'),
    ('className="bg-[#0F172A] p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-800"','className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200"'),
]
for a,b in repl:
    text = text.replace(a,b)
p.write_text(text,encoding='utf-8')
print('done replacements')
