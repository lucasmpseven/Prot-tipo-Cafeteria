import { Youtube, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#3D2420] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cursos */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Cursos</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-[#C29C6D] transition-colors">
                  Ver todos os cursos
                </button>
              </li>
            </ul>
          </div>

          {/* Eventos */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Eventos</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-[#C29C6D] transition-colors">
                  Próximos eventos
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>contato@cafeteria.com</li>
              <li>(11) 99999-9999</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C29C6D] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#C29C6D] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#C29C6D] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>© 2025 Cafeteria Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}