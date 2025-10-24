import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, User } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "Como escolher o método de preparo ideal",
      excerpt: "Descubra qual método de preparo combina mais com seu paladar e estilo de vida.",
      image: "https://images.unsplash.com/photo-1627835340836-7de1e3e722c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzYxMjA4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "15 Out 2025",
      author: "Maria Silva"
    },
    {
      id: 2,
      title: "Guia completo de origens de café",
      excerpt: "Explore as características únicas dos cafés de diferentes regiões do mundo.",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "12 Out 2025",
      author: "João Santos"
    },
    {
      id: 3,
      title: "5 receitas criativas com café",
      excerpt: "Vai além do tradicional: aprenda receitas deliciosas usando café como ingrediente.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjEyNzAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "8 Out 2025",
      author: "Ana Costa"
    },
    {
      id: 4,
      title: "A arte do latte art para iniciantes",
      excerpt: "Comece sua jornada no latte art com estas dicas básicas e essenciais.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjEyNzAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "5 Out 2025",
      author: "Pedro Oliveira"
    },
    {
      id: 5,
      title: "Entendendo os níveis de torra",
      excerpt: "Saiba como a torra influencia o sabor e escolha o ponto ideal para você.",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "1 Out 2025",
      author: "Carlos Mendes"
    },
    {
      id: 6,
      title: "Dicas para armazenar café corretamente",
      excerpt: "Mantenha seu café sempre fresco e saboroso com estas técnicas de armazenamento.",
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "28 Set 2025",
      author: "Lucia Ferreira"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[#3D2420] mb-4 uppercase tracking-wider">
            Blog & Artigos
          </h1>
          <p className="text-[#3D2420]/70 max-w-2xl mx-auto">
            Dicas, receitas e conhecimentos sobre o fascinante mundo do café.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="bg-white border-[#D9D9D9] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="aspect-video bg-[#F5EFE6] overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1A1A1A] mb-3 group-hover:text-[#6B8E6B] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#3D2420]/70 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#3D2420]/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}