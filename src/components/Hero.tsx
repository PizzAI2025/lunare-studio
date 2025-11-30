import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Heart } from "lucide-react";
import logoLunare from "@/assets/logo-lunare.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient glow de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 opacity-30 blur-3xl">
        <div className="absolute inset-0 gradient-primary rounded-full" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">O fim do caos no WhatsApp</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
            Transforme sua esmalteria
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              em um estúdio premium
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
            Agendamento 24h, lembretes automáticos e assinaturas quinzenais.
            Seus clientes nunca mais vão te esquecer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="btn-hero gap-2 text-lg px-10 py-6"
            >
              <Calendar className="w-5 h-5" />
              Começar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 rounded-[var(--radius)] hover:bg-muted"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Prova social */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  500+ esmalterias apaixonadas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem/Preview do app (placeholder com glass) */}
        <div className="mt-20 animate-fade-in-up delay-400">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative glass rounded-3xl p-8 shadow-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img 
                  src={logoLunare} 
                  alt="Lunare - Você sempre brilhando" 
                  className="w-full max-w-md animate-fade-in-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
