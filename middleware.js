import { NextResponse } from 'next/server';

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pt', 'pl', 'sv', 'da', 'no', 'fi', 'cs', 'hu', 'ro', 'el'];
const DEFAULT_LOCALE = 'fr';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip if already on a locale, API route, or static file
  if (
    LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Detect browser language from Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  const detected =
    LOCALES.find((l) => acceptLang.toLowerCase().startsWith(l)) ||
    LOCALES.find((l) => acceptLang.toLowerCase().includes(l)) ||
    DEFAULT_LOCALE;

  const url = new URL(`/${detected}${pathname === '/' ? '' : pathname}`, request.url);
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
