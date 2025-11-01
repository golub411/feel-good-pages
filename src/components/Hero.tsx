import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Конфиденциальность гарантирована",
    "Первая консультация бесплатно",
    "Онлайн и офлайн формат"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.92) 0%, hsl(var(--secondary) / 0.88) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium">Лицензированные специалисты</span>
          </div>
          
          {/* Main heading with stagger animation */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Путь к гармонии
            <br />
            <span className="text-white/90">начинается здесь</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Профессиональная психологическая поддержка для тех, кто готов изменить свою жизнь к лучшему
          </p>
          
          {/* Benefits list */}
          <div className="flex flex-col gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/95">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 shadow-lg group"
            >
              Записаться на консультацию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8"
              onClick={() => scrollToSection("about")}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
