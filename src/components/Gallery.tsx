import { Heart } from "lucide-react";

const galleryItems = [
  { id: 1, likes: 128 },
  { id: 2, likes: 95 },
  { id: 3, likes: 203 },
  { id: 4, likes: 167 },
  { id: 5, likes: 142 },
  { id: 6, likes: 189 },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trabalhos que
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              vendem sozinhos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Galeria com fotos grandes. Cliente vê e já quer agendar.
          </p>
        </div>

        {/* Grid de galeria */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square glass rounded-3xl overflow-hidden cursor-pointer animate-fade-in-up hover-glow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Placeholder com gradiente */}
              <div className="absolute inset-0 gradient-primary opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />

              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Heart className="w-6 h-6 fill-primary" />
                    <span className="text-2xl font-bold">{item.likes}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">curtidas</p>
                </div>
              </div>

              {/* Badge de likes (sempre visível) */}
              <div className="absolute bottom-4 right-4 px-3 py-1 glass rounded-full flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium">{item.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:underline underline-offset-4">
            Ver todas as fotos →
          </button>
        </div>
      </div>
    </section>
  );
};
