import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">PsyHelp</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональная психологическая помощь для вашего благополучия и
              гармонии.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@psyhelp.ru</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("testimonials");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2024 PsyHelp. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
