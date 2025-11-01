import { Brain, Users2, Baby, Briefcase, HeartHandshake, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Индивидуальная терапия",
    description: "Работа с тревогой, депрессией, стрессом и личностными проблемами",
  },
  {
    icon: Users2,
    title: "Семейная терапия",
    description: "Помощь в решении семейных конфликтов и улучшении отношений",
  },
  {
    icon: Baby,
    title: "Детская психология",
    description: "Поддержка детей и подростков в их эмоциональном развитии",
  },
  {
    icon: Briefcase,
    title: "Карьерное консультирование",
    description: "Помощь в профессиональном самоопределении и развитии",
  },
  {
    icon: HeartHandshake,
    title: "Парная терапия",
    description: "Укрепление отношений и разрешение конфликтов в паре",
  },
  {
    icon: Smile,
    title: "Групповая терапия",
    description: "Работа в группе для преодоления общих проблем",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр психологических услуг для решения различных жизненных
            ситуаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 mb-4">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
