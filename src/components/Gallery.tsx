import { Heart } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { id: 1, likes: 128, image: gallery1 },
  { id: 2, likes: 95, image: gallery2 },
  { id: 3, likes: 203, image: gallery3 },
  { id: 4, likes: 167, image: gallery4 },
  { id: 5, likes: 142, image: gallery5 },
  { id: 6, likes: 189, image: gallery6 },
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
              {/* Imagem */}
              <img 
                src={item.image} 
                alt={`Trabalho de nail art ${item.id}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

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
