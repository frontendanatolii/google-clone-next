import Footer from "../../components/Footer";
import SearchBarHeader from '../../components/SearchBarHeader'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <SearchBarHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}