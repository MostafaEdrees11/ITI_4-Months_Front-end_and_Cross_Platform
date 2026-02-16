import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import TanstackProvider from "@/components/TanstackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ backgroundColor: "#1A2CA3" }}>
        <nav className="flex gap-8 items-center mx-8 my-4">
          <Logo />
          <Navbar />
        </nav>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
