import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'www.aymorix.com';

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;
  const hostname = nextUrl.hostname;
  const pathname = nextUrl.pathname;

  // Never enforce canonical redirects outside production.
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  // Skip local development and preview hosts.
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next();
  }

  const protoHeader = headers.get('x-forwarded-proto') ?? nextUrl.protocol.replace(':', '');
  const isHttps = protoHeader === 'https';
  const isCanonicalHost = hostname === CANONICAL_HOST;

  if (!isHttps || !isCanonicalHost) {
    const redirectUrl = new URL(nextUrl.toString());
    redirectUrl.protocol = 'https:';
    redirectUrl.host = CANONICAL_HOST;
    redirectUrl.pathname = pathname;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
