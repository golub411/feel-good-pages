import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна М.",
    text: "Благодаря работе с психологом я смогла преодолеть долгие годы тревоги. Теперь чувствую себя намного увереннее и спокойнее.",
    rating: 5,
  },
  {
    name: "Дмитрий К.",
    text: "Профессиональный подход и теплая атмосфера помогли мне разобраться в сложной жизненной ситуации. Очень рекомендую!",
    rating: 5,
  },
  {
    name: "Елена С.",
    text: "Семейная терапия спасла наш брак. Мы научились слышать друг друга и находить компромиссы. Спасибо огромное!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Истории людей, которым мы помогли изменить свою жизнь к лучшему
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
