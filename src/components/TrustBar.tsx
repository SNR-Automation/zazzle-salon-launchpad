import { Star, Users, Camera, Award } from "lucide-react";

const stats = [
  { icon: Star, label: "Average Rating", value: "4.8 ★", color: "text-primary" },
  { icon: Users, label: "Ratings", value: "5,300+", color: "text-primary" },
  { icon: Camera, label: "Client Photos", value: "1,400+", color: "text-primary" },
  { icon: Award, label: "Established", value: "Since 2017", color: "text-primary" },
];

const TrustBar = () => {
  return (
    <section className="bg-secondary py-8 md:py-10 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className={`${stat.color} w-6 h-6`} />
              <span className="text-2xl md:text-3xl font-serif font-bold text-secondary-foreground">{stat.value}</span>
              <span className="text-secondary-foreground/60 text-xs md:text-sm uppercase tracking-wider font-sans">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
