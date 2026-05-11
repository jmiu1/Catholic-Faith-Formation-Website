import './globals.css';

export const metadata = {
  title: 'Catholic Faith Formation Checklist',
  description: 'A website designed to both be a resource and an overview for Catholic faith formation throughout every stage from God to Jesus to Catholicism.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
