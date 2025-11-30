import { Calendar, Bell, Image, DollarSign, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento 24h",
    description: "Clientes agendam sozinhas, escolhem profissional, serviço e horário. Você dorme tranquila.",
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    description: "WhatsApp automático 48h e 2h antes. Fim dos 'esqueci' e horários vazios.",
  },
  {
    icon: Image,
    title: "Galeria Premium",
    description: "Mostre seu trabalho com fotos grandes. Cliente vê e já quer agendar.",
  },
  {
    icon: DollarSign,
    title: "Clubes & Assinaturas",
    description: (
      <>
        <strong>Quinzenal Básico</strong>, <strong>Perfeito</strong> ou <strong>Mensal Luxo</strong>. Receita garantida todo mês.
      </>
    ),
  },
  {
    icon: Award,
    title: "Programa VIP",
    description: "Fidelidade automática. Assinantes ganham selos especiais e prioridade.",
  },
  {
    icon: Clock,
    title: "Agenda Visual",
    description: "Arrasta e solta horários. Comanda digital. Caixa diário com relatório.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo que você precisa
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              em um só lugar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do agendamento ao pagamento, tudo automatizado e profissional
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Ícone */}
                <div className="p-3 rounded-2xl gradient-primary">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Conteúdo */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
