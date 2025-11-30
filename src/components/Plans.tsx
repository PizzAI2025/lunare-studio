import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Quinzenal Básico",
    price: "129",
    icon: Sparkles,
    description: "Perfeito para começar",
    features: [
      "Unha simples + esmaltação",
      "1 design básico por visita",
      "Hidratação express",
      "Lixamento e polimento",
      "2 visitas por mês garantidas",
    ],
    highlight: false,
  },
  {
    name: "Quinzenal Perfeito",
    price: "179",
    icon: Crown,
    description: "Mais vendido",
    features: [
      "Tudo do Básico +",
      "Spa para cutículas",
      "Design elaborado incluído",
      "Massagem com creme premium",
      "Troca grátis se descascar",
      "Prioridade no agendamento",
    ],
    highlight: true,
  },
  {
    name: "Mensal Luxo",
    price: "249",
    icon: Star,
    description: "Experiência completa",
    features: [
      "Tudo do Perfeito +",
      "Alongamento incluso",
      "Blindagem ultra resistente",
      "Parafina + esfoliação",
      "Café e champanhe",
      "Clube VIP com brindes exclusivos",
    ],
    highlight: false,
  },
];

export const Plans = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Gradient de fundo */}
      <div className="absolute inset-0 gradient-glow opacity-50" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha seu plano
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              e seja VIP
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Assinatura recorrente = receita garantida + clientes fiéis
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up ${
                plan.highlight ? "md:-mt-8" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge de destaque */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 gradient-primary rounded-full text-primary-foreground text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Card do plano */}
              <div
                className={`card-premium h-full ${
                  plan.highlight
                    ? "border-2 border-primary shadow-glow"
                    : ""
                }`}
              >
                {/* Header do card */}
                <div className="text-center space-y-4 mb-8">
                  <div className="inline-flex p-4 rounded-2xl gradient-primary">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                      R$ {plan.price}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "btn-hero"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                  size="lg"
                >
                  {plan.highlight ? "Escolher Perfeito" : "Escolher Plano"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          Todas as assinaturas incluem lembretes automáticos e agendamento prioritário ✨
        </p>
      </div>
    </section>
  );
};
