import './globals.css';

export const metadata = {
  title: 'Catholic Faith Formation Checklist',
  description: 'A basic checklist website starter built with Next.js and ready for Netlify deployment.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
