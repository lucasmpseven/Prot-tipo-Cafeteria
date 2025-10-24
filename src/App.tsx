import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/Shop";
import { Courses } from "./components/pages/Courses";
import { Subscription } from "./components/pages/Subscription";
import { Auth } from "./components/pages/Auth";
import { Blog } from "./components/pages/Blog";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "shop":
        return <Shop onAddToCart={handleAddToCart} />;
      case "courses":
        return <Courses />;
      case "subscription":
        return <Subscription />;
      case "auth":
        return <Auth />;
      case "blog":
        return <Blog />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartCount}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster position="top-right" />
    </div>
  );
}