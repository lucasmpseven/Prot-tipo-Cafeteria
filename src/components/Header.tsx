import { Coffee, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount?: number;
}

export function Header({ currentPage, onNavigate, cartCount = 0 }: HeaderProps) {
  return (
    <header className="bg-[#F5EFE6] border-b border-[#D9D9D9] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Coffee className="w-8 h-8 text-[#3D2420]" strokeWidth={1.5} />
            <span className="text-[#3D2420] uppercase tracking-wider">Cafeteria Artesanal</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[#3D2420] hover:text-[#6B8E6B] transition-colors ${
                currentPage === 'home' ? 'text-[#6B8E6B]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`text-[#3D2420] hover:text-[#6B8E6B] transition-colors ${
                currentPage === 'shop' ? 'text-[#6B8E6B]' : ''
              }`}
            >
              Loja
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className={`text-[#3D2420] hover:text-[#6B8E6B] transition-colors ${
                currentPage === 'courses' ? 'text-[#6B8E6B]' : ''
              }`}
            >
              Cursos
            </button>
            <button
              onClick={() => onNavigate('subscription')}
              className={`text-[#3D2420] hover:text-[#6B8E6B] transition-colors ${
                currentPage === 'subscription' ? 'text-[#6B8E6B]' : ''
              }`}
            >
              Assinatura
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className={`text-[#3D2420] hover:text-[#6B8E6B] transition-colors ${
                currentPage === 'blog' ? 'text-[#6B8E6B]' : ''
              }`}
            >
              Blog
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('shop')}
              className="relative hover:opacity-80 transition-opacity"
            >
              <ShoppingCart className="w-6 h-6 text-[#3D2420]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C29C6D] text-white w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Button
              onClick={() => onNavigate('auth')}
              variant="ghost"
              size="sm"
              className="text-[#3D2420] hover:text-[#6B8E6B]"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}