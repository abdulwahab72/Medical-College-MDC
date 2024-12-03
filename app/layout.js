import "./globals.css";
import Footer from "@/components/Footer";
import Footer_L from "@/components/Footer_L";
import Container from "@/components/Container";
import TopNav from "@/components/Navbar/TopNav";
import Navbar from "@/components/Navbar/Navbar";
import MobileNav from "@/components/Navbar/MobileNav";

export const metadata = {
  title: "Medicaid College Chakdara",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <TopNav />
          <Navbar />
          <MobileNav />
          {children}
          <Footer />

          <Footer_L />
        </Container>
      </body>
    </html>
  );
}