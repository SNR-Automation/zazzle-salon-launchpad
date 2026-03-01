import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Appointment Requested! ✨",
      description: `Thank you ${name}! We'll contact you shortly to confirm your ${service} appointment.`,
    });
    setName("");
    setPhone("");
    setService("");
    setDate(undefined);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Request an Appointment</h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
          <Input
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-card border-border h-12 font-sans"
          />
          <Input
            placeholder="Phone Number *"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-card border-border h-12 font-sans"
          />
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="bg-card border-border h-12 font-sans">
              <SelectValue placeholder="Select Service *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Haircut & Styling">Haircut & Styling</SelectItem>
              <SelectItem value="Hair Treatment & Colour">Hair Treatment & Colour</SelectItem>
              <SelectItem value="Beauty & Skin">Beauty & Skin</SelectItem>
              <SelectItem value="Bridal Package">Bridal Package</SelectItem>
              <SelectItem value="Nails">Nails</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full h-12 justify-start text-left font-normal bg-card border-border font-sans", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Preferred Date (Optional)"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 font-sans">
            <Send size={18} className="mr-2" />
            Request Appointment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
