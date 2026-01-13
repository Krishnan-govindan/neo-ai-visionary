import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Star, Zap } from "lucide-react";
import ctaImage from "@/assets/ai-handshake.jpg";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${ctaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-8 h-8 bg-primary/20 rounded-full animate-pulse float" />
        <div className="absolute top-40 right-32 w-12 h-12 bg-secondary/15 rounded-full animate-pulse float-delayed" />
        <div className="absolute bottom-20 left-40 w-6 h-6 bg-neural/25 rounded-full animate-pulse float" />
        <div className="absolute bottom-32 right-20 w-10 h-10 bg-accent/20 rounded-full animate-pulse float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Animation */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <Rocket className="w-16 h-16 text-primary animate-pulse rotate-3d" />
            <Star className="w-12 h-12 text-neural animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Zap className="w-14 h-14 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-8 text-glow">
            <span className="text-gradient-primary">Ready to Supercharge</span>
            <br />
            <span className="text-gradient-neural">Your Business with AI?</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Don't let your competitors get ahead. Join the AI revolution and transform your business with 
            <span className="text-primary font-semibold"> cutting-edge automation</span> and 
            <span className="text-secondary font-semibold"> intelligent solutions</span>.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-ai">
              <Rocket className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-semibold text-lg mb-2">Instant Results</h3>
              <p className="text-muted-foreground text-sm">See improvements within the first 30 days</p>
            </div>
            
            <div className="card-ai">
              <Star className="w-8 h-8 text-neural mb-4 mx-auto" />
              <h3 className="font-orbitron font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">Work with AI specialists who understand your industry</p>
            </div>
            
            <div className="card-ai">
              <Zap className="w-8 h-8 text-secondary mb-4 mx-auto" />
              <h3 className="font-orbitron font-semibold text-lg mb-2">Scalable Growth</h3>
              <p className="text-muted-foreground text-sm">Solutions that grow with your business</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative inline-block group mb-8">
            <Button 
              asChild
              className="btn-ai-primary text-xl px-16 py-8 group-hover:shadow-[0_0_80px_hsl(var(--primary)/0.8)]"
            >
              <a 
                href="https://calendly.com/fulsuccess/ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </Button>
            
            {/* Enhanced Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-neural/30 rounded-xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500" />
          </div>

          {/* Urgency Text */}
          <p className="text-lg text-muted-foreground">
            🚀 <span className="text-primary font-semibold">Limited slots available</span> - 
            Book your free consultation today and get a 
            <span className="text-neural font-semibold"> personalized AI strategy</span> for your business.
          </p>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm">No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm">30-day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neural rounded-full animate-pulse" />
              <span className="text-sm">Free Strategy Session</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default CTA;