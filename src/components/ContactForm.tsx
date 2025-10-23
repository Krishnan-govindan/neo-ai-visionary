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

            {/* WhatsApp Number Field */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground font-semibold">
                WhatsApp Number (with country code) *
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+1 234 567 8900"
                required
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
              />
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
