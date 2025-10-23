import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const services = [
  "Social Media Ads Creation",
  "Social Media Automation",
  "Website Creation",
  "Landing Page Creation",
  "Blog Automation",
  "AI Video Editing",
  "AI Clone for Your Brand",
  "Chatbot Building"
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Let the form submit naturally to Formspree
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, hsl(var(--secondary)/0.15) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gradient-primary">
            Get Started Today
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-neural rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="card-ai p-8">
          <form
            action="https://formspree.io/f/xzzjlqlo"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* WhatsApp Number Field with Country Code */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">
                WhatsApp Number *
              </Label>
              <div className="flex gap-2">
                <Select name="countryCode" required>
                  <SelectTrigger className="w-[140px] bg-background/50 border-primary/20 focus:border-primary transition-colors">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-primary/20 max-h-[300px]">
                    <SelectItem value="+1">🇺🇸 +1 (US)</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                    <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86 (China)</SelectItem>
                    <SelectItem value="+81">🇯🇵 +81 (Japan)</SelectItem>
                    <SelectItem value="+49">🇩🇪 +49 (Germany)</SelectItem>
                    <SelectItem value="+33">🇫🇷 +33 (France)</SelectItem>
                    <SelectItem value="+39">🇮🇹 +39 (Italy)</SelectItem>
                    <SelectItem value="+34">🇪🇸 +34 (Spain)</SelectItem>
                    <SelectItem value="+7">🇷🇺 +7 (Russia)</SelectItem>
                    <SelectItem value="+52">🇲🇽 +52 (Mexico)</SelectItem>
                    <SelectItem value="+55">🇧🇷 +55 (Brazil)</SelectItem>
                    <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                    <SelectItem value="+82">🇰🇷 +82 (S. Korea)</SelectItem>
                    <SelectItem value="+971">🇦🇪 +971 (UAE)</SelectItem>
                    <SelectItem value="+966">🇸🇦 +966 (Saudi)</SelectItem>
                    <SelectItem value="+65">🇸🇬 +65 (Singapore)</SelectItem>
                    <SelectItem value="+60">🇲🇾 +60 (Malaysia)</SelectItem>
                    <SelectItem value="+63">🇵🇭 +63 (Philippines)</SelectItem>
                    <SelectItem value="+66">🇹🇭 +66 (Thailand)</SelectItem>
                    <SelectItem value="+27">🇿🇦 +27 (S. Africa)</SelectItem>
                    <SelectItem value="+20">🇪🇬 +20 (Egypt)</SelectItem>
                    <SelectItem value="+234">🇳🇬 +234 (Nigeria)</SelectItem>
                    <SelectItem value="+254">🇰🇪 +254 (Kenya)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="123 456 7890"
                  required
                  className="flex-1 bg-background/50 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <Label htmlFor="service" className="text-foreground font-semibold">
                Service Interested In *
              </Label>
              <Select name="service" required>
                <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary transition-colors">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/20">
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Additional Details (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more about your project..."
                rows={4}
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Checkbox
                id="consent"
                name="consent"
                required
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                className="mt-1"
              />
              <Label
                htmlFor="consent"
                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
              >
                I consent to providing my WhatsApp number to receive communication messages regarding my inquiry. 
                I understand that I can opt-out at any time. *
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !consentChecked}
              className="btn-ai-primary w-full"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Inquiry
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
