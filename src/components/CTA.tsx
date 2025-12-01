import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  return <section className="py-24 px-4 relative overflow-hidden">
      {/* Gradient de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 gradient-primary opacity-20 blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="card-premium text-center space-y-8 shadow-glow border-2 border-primary/20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Comece gratuitamente</span>
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronta para deixar o
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              WhatsApp pra trás?
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Configure sua esmalteria em menos de 5 minutos.
            <br />
            Comece a receber agendamentos hoje mesmo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="btn-hero gap-2 text-lg px-10 py-6"
              onClick={() => navigate('/agenda')}
            >
              Criar Minha Agenda
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground">Grátis por 10 dias • Sem cartão de crédito</p>
          </div>

          {/* Garantia */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">✓</span>
                </div>
                <span>Configuração em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">✓</span>
                </div>
                <span>Suporte via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">✓</span>
                </div>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};