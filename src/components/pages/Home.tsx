import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featuredProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1627835340836-7de1e3e722c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzYxMjA4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1603999364610-bc6d03e5071d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBncmluZGVyJTIwZXNwcmVzc298ZW58MXx8fHwxNzYxMjk1MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#F5EFE6] py-20 md:py-32 border-b border-[#D9D9D9]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[#3D2420] mb-6 uppercase tracking-wide">
            Cafés do mundo,<br />direto para sua xícara
          </h1>
          <Button
            onClick={() => onNavigate('shop')}
            className="bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider px-8 py-6"
          >
            Ver Mais
          </Button>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#3D2420] mb-12 uppercase tracking-wider">
            Destaques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[4/3] bg-white mb-4 overflow-hidden rounded border border-[#D9D9D9]">
                  <ImageWithFallback
                    src={product.image}
                    alt="Produto em destaque"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Button
                  onClick={() => onNavigate('shop')}
                  className="w-full bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider"
                >
                  Ver Produto
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conheça o Barista Section */}
      <section className="py-16 bg-white border-y border-[#D9D9D9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#3D2420] mb-6 uppercase tracking-wider">
                Conheça o Barista
              </h2>
              <div className="space-y-4 mb-6">
                <div className="h-3 bg-[#D9D9D9] rounded"></div>
                <div className="h-3 bg-[#D9D9D9] rounded w-5/6"></div>
                <div className="h-3 bg-[#D9D9D9] rounded w-4/6"></div>
              </div>
              <p className="text-[#3D2420]/70 mb-6">
                Nossa equipe de baristas experientes está pronta para compartilhar
                a paixão pelo café e ensinar técnicas profissionais de preparo.
              </p>
              <Button
                onClick={() => onNavigate('courses')}
                className="bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider"
              >
                Ver Produto
              </Button>
            </div>
            <div className="aspect-[4/3] bg-[#F5EFE6] rounded overflow-hidden border border-[#D9D9D9]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635051296005-51184754615f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxMTkzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Barista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aprenda sobre Cafés Section */}
      <section className="py-16 bg-[#F5EFE6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#3D2420] mb-4 uppercase tracking-wider">
            Aprenda sobre Cafés
          </h2>
          <p className="text-[#3D2420]/70 mb-8 max-w-2xl mx-auto">
            Explore nosso blog e cursos para mergulhar no mundo do café.
          </p>
          <Button
            onClick={() => onNavigate('blog')}
            className="bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider px-8"
          >
            Ver Mais
          </Button>
        </div>
      </section>
    </div>
  );
}