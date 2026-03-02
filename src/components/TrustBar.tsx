import { Star, Users, Camera, Award } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const stats = [
  { icon: Star, label: "Average Rating", value: "4.8 ★", color: "text-white" },
  { icon: Users, label: "Ratings", value: "5,300+", color: "text-white" },
  { icon: Camera, label: "Client Photos", value: "1,400+", color: "text-white" },
  { icon: Award, label: "Established", value: "Since 2017", color: "text-white" },
];

const TrustBar = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-secondary py-8 md:py-10 border-y border-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 fade-in-section${isVisible ? " visible" : ""}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                <stat.icon className={`${stat.color} w-5 h-5`} />
              </div>
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
