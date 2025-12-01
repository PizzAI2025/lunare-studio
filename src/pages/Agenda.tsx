import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Agenda = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="container max-w-6xl mx-auto mb-8">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-primary bg-clip-text text-transparent">
              Agenda Online
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor horário para você
          </p>
        </div>
      </div>

      {/* Conteúdo da Agenda */}
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendário */}
          <Card className="p-6 glass">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Selecione a Data
            </h2>
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Calendário interativo em breve</p>
            </div>
          </Card>

          {/* Horários Disponíveis */}
          <Card className="p-6 glass">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Horários Disponíveis
            </h2>
            <div className="space-y-3">
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                <Button 
                  key={time}
                  variant="outline" 
                  className="w-full justify-start text-lg hover:bg-primary/10"
                >
                  {time}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Formulário de Contato */}
        <Card className="mt-8 p-8 glass">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Confirme seus Dados
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Nome Completo
              </label>
              <input 
                type="text" 
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                WhatsApp
              </label>
              <input 
                type="tel" 
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-mail
              </label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <Button size="lg" className="w-full btn-hero text-lg py-6">
              Confirmar Agendamento
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Agenda;
