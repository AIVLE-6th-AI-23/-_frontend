import './globals.css';

export const metadata = {
  title: 'Hate Speech Prevention',
  description: 'Identify and prevent hate speech in everyday life.',
  icons: {
    icon: "/favicon.ico",
  },
};``

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js에서 메타데이터는 자동으로 처리됩니다 */}
      </head>
      <body>
        <header className="header">
          <a href="/home">
            <img
              src="/NERO_logo1.png"
              alt="NERO Logo"
              className="logo"
            />
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
