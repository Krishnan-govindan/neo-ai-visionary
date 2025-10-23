import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Brand Name at Top */}
      <div className="absolute top-0 left-0 z-20 p-6">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-gradient-primary">
          fulsuccess
        </h2>
      </div>

      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60 float" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-40 float-delayed" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-neural rounded-full animate-pulse opacity-70 float" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-accent rounded-full animate-pulse opacity-50 float-delayed" />
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neural-line top-1/4 left-0 w-1/3" style={{ animationDelay: '0s' }} />
        <div className="neural-line top-1/2 right-0 w-1/4" style={{ animationDelay: '1s' }} />
        <div className="neural-line bottom-1/3 left-1/4 w-1/2" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* AI Icons Animation */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <Brain className="w-12 h-12 text-primary animate-pulse" />
          <Sparkles className="w-10 h-10 text-neural animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Zap className="w-14 h-14 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 text-glow">
          <span className="text-gradient-primary">Looking for AI Solutions</span>
          <br />
          <span className="text-gradient-neural">to Grow Your Business?</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          We bring <span className="text-primary font-semibold">AI power</span> to your business with 
          <span className="text-secondary font-semibold"> automation</span>, 
          <span className="text-neural font-semibold"> creativity</span>, and 
          <span className="text-accent font-semibold"> growth-focused strategies</span>.
        </p>

        {/* CTA Button */}
        <div className="relative inline-block group">
          <Button 
            asChild
            className="btn-ai-primary text-lg px-12 py-6 group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.8)]"
          >
            <a 
              href="https://calendly.com/krishnangovindan/ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Book a Free AI Strategy Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </Button>
          
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500" />
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-neural" />
            <span>Future-Ready Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-secondary" />
            <span>Instant Results</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;