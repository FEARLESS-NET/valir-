import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "@/src/context/CartContext";
import { LikeProvider } from "@/src/context/LikeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LikeProvider>
          <CartProvider>
          {children} {/* /savat va /shoes/[id] ham shu yerda */}
        </CartProvider>
        </LikeProvider>
        
        <Footer />
      </body>
    </html> 
  );
}