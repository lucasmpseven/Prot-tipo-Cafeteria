import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  spots: number;
  price: number;
  image: string;
  onEnroll: () => void;
}

export function CourseCard({
  title,
  description,
  date,
  duration,
  spots,
  price,
  image,
  onEnroll
}: CourseCardProps) {
  return (
    <Card className="bg-white border-[#D9D9D9] overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-[#F5EFE6] relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#3D2420]/70 mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-[#3D2420]/70">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-[#3D2420]/70">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-[#3D2420]/70">
            <Users className="w-4 h-4" />
            <span>{spots} vagas disponíveis</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#1A1A1A]">R$ {price.toFixed(2)}</span>
          <Button
            onClick={onEnroll}
            className="bg-[#C29C6D] hover:bg-[#E0A96D] text-white"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </Card>
  );
}