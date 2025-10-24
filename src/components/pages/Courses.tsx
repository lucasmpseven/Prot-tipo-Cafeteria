import { CourseCard } from "../CourseCard";
import { toast } from "sonner@2.0.3";

export function Courses() {
  const courses = [
    {
      id: 1,
      title: "Barista Profissional",
      description: "Aprenda técnicas profissionais de preparo de café e arte latte com nossos especialistas.",
      date: "15 de Novembro, 2025",
      duration: "8 horas",
      spots: 12,
      price: 450.00,
      image: "https://images.unsplash.com/photo-1635051296005-51184754615f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxMTkzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Métodos de Extração",
      description: "Explore diferentes métodos de preparo: V60, Chemex, Aeropress e French Press.",
      date: "22 de Novembro, 2025",
      duration: "4 horas",
      spots: 15,
      price: 280.00,
      image: "https://images.unsplash.com/photo-1627835340836-7de1e3e722c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzYxMjA4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Cupping e Degustação",
      description: "Desenvolva seu paladar e aprenda a identificar notas e características dos cafés.",
      date: "29 de Novembro, 2025",
      duration: "3 horas",
      spots: 10,
      price: 320.00,
      image: "https://images.unsplash.com/photo-1739050981003-6e2cfb081384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YXN0aW5nJTIwY3VwcGluZ3xlbnwxfHx8fDE3NjEyOTUxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Latte Art Avançado",
      description: "Crie designs complexos e impressionantes com técnicas avançadas de latte art.",
      date: "6 de Dezembro, 2025",
      duration: "5 horas",
      spots: 8,
      price: 380.00,
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjEyNzAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Torra de Café",
      description: "Entenda o processo de torra e como ele influencia o perfil de sabor do café.",
      date: "13 de Dezembro, 2025",
      duration: "6 horas",
      spots: 10,
      price: 420.00,
      image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxMTk2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Coffee Business",
      description: "Aprenda a gerir um negócio de café, desde custos até experiência do cliente.",
      date: "20 de Dezembro, 2025",
      duration: "4 horas",
      spots: 20,
      price: 350.00,
      image: "https://images.unsplash.com/photo-1635051296005-51184754615f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxMTkzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const handleEnroll = (courseTitle: string) => {
    toast.success(`Inscrição realizada para: ${courseTitle}!`);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[#3D2420] mb-4 uppercase tracking-wider">
            Cursos & Workshops
          </h1>
          <p className="text-[#3D2420]/70 max-w-2xl mx-auto">
            Desenvolva suas habilidades com nossos cursos práticos ministrados por baristas experientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              date={course.date}
              duration={course.duration}
              spots={course.spots}
              price={course.price}
              image={course.image}
              onEnroll={() => handleEnroll(course.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}