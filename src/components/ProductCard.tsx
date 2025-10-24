import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  origin?: string;
  onAddToCart: () => void;
}

export function ProductCard({ name, price, image, origin, onAddToCart }: ProductCardProps) {
  return (
    <Card className="bg-white border-[#D9D9D9] overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-[#F5EFE6] relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[#1A1A1A] mb-1">{name}</h3>
        {origin && (
          <p className="text-[#3D2420]/70 mb-3">{origin}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[#1A1A1A]">R$ {price.toFixed(2)}</span>
          <Button
            onClick={onAddToCart}
            className="bg-[#C29C6D] hover:bg-[#E0A96D] text-white"
            size="sm"
          >
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
}