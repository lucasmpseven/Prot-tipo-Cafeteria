import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Subscription() {
  const plans = [
    {
      id: 1,
      name: "Plano Essencial",
      price: 79.90,
      frequency: "mensal",
      amount: "250g de café",
      benefits: [
        "1 café especial por mês (250g)",
        "Escolha entre 3 origens",
        "Frete grátis",
        "Acesso ao blog exclusivo"
      ]
    },
    {
      id: 2,
      name: "Plano Premium",
      price: 139.90,
      frequency: "mensal",
      amount: "500g de café",
      benefits: [
        "2 cafés especiais por mês (500g)",
        "Escolha entre 6 origens",
        "Frete grátis",
        "Acesso ao blog exclusivo",
        "10% de desconto na loja",
        "Surpresas mensais"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Plano Explorador",
      price: 219.90,
      frequency: "mensal",
      amount: "1kg de café",
      benefits: [
        "3 cafés especiais por mês (1kg)",
        "Todas as origens disponíveis",
        "Frete grátis",
        "Acesso ao blog exclusivo",
        "20% de desconto na loja",
        "Surpresas mensais",
        "Acesso a cafés limitados",
        "1 curso gratuito por trimestre"
      ]
    }
  ];

  const handleSubscribe = (planName: string) => {
    toast.success(`Assinatura do ${planName} realizada com sucesso!`);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[#3D2420] mb-4 uppercase tracking-wider">
            Assinatura de Café
          </h1>
          <p className="text-[#3D2420]/70 max-w-2xl mx-auto">
            Receba cafés especiais selecionados todo mês na sua casa. 
            Cancele quando quiser, sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`bg-white border-2 p-8 ${
                plan.featured
                  ? "border-[#C29C6D] shadow-xl scale-105"
                  : "border-[#D9D9D9]"
              }`}
            >
              {plan.featured && (
                <div className="bg-[#C29C6D] text-white text-center py-2 -mx-8 -mt-8 mb-6 uppercase tracking-wider">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-[#3D2420] mb-2 text-center">{plan.name}</h3>
              
              <div className="text-center mb-6">
                <span className="text-[#1A1A1A]">R$ {plan.price.toFixed(2)}</span>
                <span className="text-[#3D2420]/70">/{plan.frequency}</span>
                <p className="text-[#3D2420]/70 mt-2">{plan.amount}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#3D2420]/70">
                    <Check className="w-5 h-5 text-[#6B8E6B] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full ${
                  plan.featured
                    ? "bg-[#C29C6D] hover:bg-[#E0A96D]"
                    : "bg-[#3D2420] hover:bg-[#2a1916]"
                } text-white uppercase tracking-wider`}
              >
                Assinar Agora
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg border border-[#D9D9D9] max-w-3xl mx-auto">
          <h3 className="text-[#3D2420] mb-4 text-center">Como Funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-[#C29C6D] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="text-[#1A1A1A] mb-2">Escolha seu plano</h4>
              <p className="text-[#3D2420]/70">Selecione o plano que melhor se adequa ao seu consumo</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#C29C6D] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="text-[#1A1A1A] mb-2">Personalize</h4>
              <p className="text-[#3D2420]/70">Escolha suas preferências de torra e origem</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#C29C6D] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="text-[#1A1A1A] mb-2">Receba em casa</h4>
              <p className="text-[#3D2420]/70">Seu café chega fresquinho todo mês</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}