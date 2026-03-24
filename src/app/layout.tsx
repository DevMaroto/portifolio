import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Maroto",
  description: "Portfólio Web Pessoal - Dev Maroto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/logo_DevMaroto-removebg-preview.png" type="image/x-icon" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
