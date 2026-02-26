import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Header from "../components/Header";

export const metadata = {
  title: {
    default: "Showers of Blessing Outreach Ministry (SoBOM)",
    template: "%s | Showers of Blessing Outreach Ministry",
  },
  description:
    "Showers of Blessing Outreach Ministry (SoBOM) is a Christ-centered church dedicated to spreading the Word of God, prayer, worship, and community impact.",
  keywords: [
    "Showers of Blessing Outreach Ministry",
    "SoBOM Church",
    "Christian Church",
    "Church in Ghana",
    "Bible Teaching",
    "Prayer Ministry",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-deep-blue">

        <Header />

        <BackgroundWrapper />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
