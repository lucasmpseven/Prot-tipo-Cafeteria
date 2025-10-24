import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { toast } from "sonner@2.0.3";

interface ShopProps {
  onAddToCart: () => void;
}

export function Shop({ onAddToCart }: ShopProps) {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    // Cafés Especiais
    {
      id: 1,
      name: "Café Etiópia Yirgacheffe",
      price: 52.90,
      origin: "Etiópia - Notas florais e cítricas",
      image: "https://images.unsplash.com/photo-1633627354173-1a26871e3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjEyOTU2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 2,
      name: "Café Colômbia Supremo",
      price: 46.90,
      origin: "Colômbia - Notas de caramelo e nozes",
      image: "https://images.unsplash.com/photo-1633627360580-4e9594300341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWV8ZW58MXx8fHwxNzYxMjk1NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 3,
      name: "Café Brasil Cerrado",
      price: 39.90,
      origin: "Brasil - Notas achocolatadas e amendoadas",
      image: "https://images.unsplash.com/photo-1555366792-1aeb1899bd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjb2ZmZWV8ZW58MXx8fHwxNzYxMjk1NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 4,
      name: "Café Kenya AA",
      price: 54.90,
      origin: "Quênia - Notas de frutas vermelhas e vinho",
      image: "https://images.unsplash.com/photo-1607945610118-903b1bc6716a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MTI5NTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 5,
      name: "Café Guatemala Antigua",
      price: 48.90,
      origin: "Guatemala - Notas de chocolate e especiarias",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 6,
      name: "Café Costa Rica Tarrazú",
      price: 51.90,
      origin: "Costa Rica - Notas cítricas e mel",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 7,
      name: "Café Peru Orgânico",
      price: 44.90,
      origin: "Peru - Notas de frutas tropicais",
      image: "https://images.unsplash.com/photo-1633627354173-1a26871e3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjEyOTU2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 8,
      name: "Café Indonésia Sumatra",
      price: 49.90,
      origin: "Indonésia - Notas terrosas e herbais",
      image: "https://images.unsplash.com/photo-1633627360580-4e9594300341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWV8ZW58MXx8fHwxNzYxMjk1NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    
    // Grãos Especiais
    {
      id: 9,
      name: "Blend Especial da Casa",
      price: 42.90,
      origin: "Blend exclusivo - Equilíbrio perfeito",
      image: "https://images.unsplash.com/photo-1555366792-1aeb1899bd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjb2ZmZWV8ZW58MXx8fHwxNzYxMjk1NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 10,
      name: "Café Descafeinado Suíço",
      price: 45.90,
      origin: "Processo Swiss Water - Sabor preservado",
      image: "https://images.unsplash.com/photo-1607945610118-903b1bc6716a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MTI5NTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 11,
      name: "Espresso Intenso",
      price: 47.90,
      origin: "Torra escura - Corpo encorpado",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },
    {
      id: 12,
      name: "Café Torra Clara",
      price: 44.90,
      origin: "Torra clara - Acidez balanceada",
      image: "https://images.unsplash.com/photo-1633627354173-1a26871e3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjEyOTU2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "coffee"
    },

    // Acessórios
    {
      id: 13,
      name: "Moedor Manual Premium",
      price: 219.90,
      origin: "Moagem ajustável - Cerâmica japonesa",
      image: "https://images.unsplash.com/photo-1603999364610-bc6d03e5071d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBncmluZGVyJTIwZXNwcmVzc298ZW58MXx8fHwxNzYxMjk1MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 14,
      name: "Dripper V60 Cerâmica",
      price: 89.90,
      origin: "Método japonês - Tamanho 02",
      image: "https://images.unsplash.com/photo-1627835340836-7de1e3e722c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzYxMjA4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 15,
      name: "Chaleira Gooseneck 600ml",
      price: 189.90,
      origin: "Aço inox - Controle preciso de fluxo",
      image: "https://images.unsplash.com/photo-1627835340836-7de1e3e722c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzYxMjA4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 16,
      name: "Prensa Francesa 1L",
      price: 129.90,
      origin: "Vidro borossilicato - 8 xícaras",
      image: "https://images.unsplash.com/photo-1669303496695-5b1030bf3c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmcmVuY2glMjBwcmVzc3xlbnwxfHx8fDE3NjEyOTU2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 17,
      name: "Filtros de Papel V60",
      price: 24.90,
      origin: "Pacote com 100 unidades",
      image: "https://images.unsplash.com/photo-1538577246269-4cb47228892e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmaWx0ZXJzfGVufDF8fHx8MTc2MTI5NTYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 18,
      name: "Xícara Cerâmica Artesanal",
      price: 54.90,
      origin: "Feita à mão - 250ml",
      image: "https://images.unsplash.com/photo-1720537262372-57e81c4db13c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtdWclMjBjZXJhbWljfGVufDF8fHx8MTc2MTI4MDQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 19,
      name: "Máquina Espresso Manual",
      price: 1299.90,
      origin: "Pressão profissional - 15 bar",
      image: "https://images.unsplash.com/photo-1582572426223-d152057ba012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYxMjk1NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    },
    {
      id: 20,
      name: "Balança Digital de Precisão",
      price: 159.90,
      origin: "Precisão 0.1g - Com timer",
      image: "https://images.unsplash.com/photo-1538577246269-4cb47228892e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmaWx0ZXJzfGVufDF8fHx8MTc2MTI5NTYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "accessories"
    }
  ];

  const handleAddToCart = (productName: string) => {
    onAddToCart();
    toast.success(`${productName} adicionado ao carrinho!`);
  };

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[#3D2420] mb-4 uppercase tracking-wider">
            Nossa Loja
          </h1>
          <p className="text-[#3D2420]/70 max-w-2xl mx-auto">
            Cafés especiais de origem e acessórios selecionados para a melhor experiência.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-md mx-auto justify-center bg-white border border-[#D9D9D9]">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-[#C29C6D] data-[state=active]:text-white"
            >
              Todos os Produtos
            </TabsTrigger>
            <TabsTrigger 
              value="coffee"
              className="data-[state=active]:bg-[#C29C6D] data-[state=active]:text-white"
            >
              Cafés
            </TabsTrigger>
            <TabsTrigger 
              value="accessories"
              className="data-[state=active]:bg-[#C29C6D] data-[state=active]:text-white"
            >
              Acessórios
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              origin={product.origin}
              image={product.image}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-[#D9D9D9]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-[#6B8E6B] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] mb-2">Qualidade Garantida</h3>
              <p className="text-[#3D2420]/70">Cafés selecionados e torrados semanalmente</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#6B8E6B] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] mb-2">Frete Grátis</h3>
              <p className="text-[#3D2420]/70">Para compras acima de R$ 150,00</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#6B8E6B] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] mb-2">Entrega Rápida</h3>
              <p className="text-[#3D2420]/70">Receba em até 3 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
