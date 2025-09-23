import { 
  Share2, 
  Bot, 
  Globe, 
  FileText, 
  PenTool, 
  Video, 
  UserCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Share2,
    title: "Social Media Ads Creation",
    description: "AI-driven campaigns that convert and engage your target audience with precision.",
    color: "primary",
    delay: "0s"
  },
  {
    icon: Bot,
    title: "Social Media Automation",
    description: "Auto-posting & engagement systems that keep your brand active 24/7.",
    color: "secondary",
    delay: "0.1s"
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Modern, responsive, animated websites that captivate and convert visitors.",
    color: "neural",
    delay: "0.2s"
  },
  {
    icon: FileText,
    title: "Landing Page Creation",
    description: "Conversion-focused designs that turn visitors into customers instantly.",
    color: "accent",
    delay: "0.3s"
  },
  {
    icon: PenTool,
    title: "Blog Automation",
    description: "Auto-generate and post engaging blogs daily to boost your SEO ranking.",
    color: "primary",
    delay: "0.4s"
  },
  {
    icon: Video,
    title: "AI Video Editing",
    description: "Smart, quick, professional video production that saves time and money.",
    color: "secondary",
    delay: "0.5s"
  },
  {
    icon: UserCheck,
    title: "AI Clone for Your Brand",
    description: "Personalized AI avatar and voice clone that represents your brand 24/7.",
    color: "neural",
    delay: "0.6s"
  }
];

const Solutions = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-tl from-neural/10 to-accent/10 rounded-full blur-3xl float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 text-gradient-primary">
            Our AI-Powered Solutions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-neural rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your business with cutting-edge AI solutions designed to 
            <span className="text-primary font-semibold"> automate</span>, 
            <span className="text-secondary font-semibold"> optimize</span>, and 
            <span className="text-neural font-semibold"> accelerate</span> your growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="card-ai group hover:cursor-pointer"
              style={{ animationDelay: solution.delay }}
            >
              {/* Icon with Glow Effect */}
              <div className="relative mb-6">
                <div className={`
                  absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500
                  ${solution.color === 'primary' ? 'bg-primary/30' : ''}
                  ${solution.color === 'secondary' ? 'bg-secondary/30' : ''}
                  ${solution.color === 'neural' ? 'bg-neural/30' : ''}
                  ${solution.color === 'accent' ? 'bg-accent/30' : ''}
                `} />
                <solution.icon className={`
                  relative w-12 h-12 group-hover:scale-110 transition-all duration-300
                  ${solution.color === 'primary' ? 'text-primary' : ''}
                  ${solution.color === 'secondary' ? 'text-secondary' : ''}
                  ${solution.color === 'neural' ? 'text-neural' : ''}
                  ${solution.color === 'accent' ? 'text-accent' : ''}
                `} />
              </div>

              {/* Content */}
              <h3 className="font-orbitron font-bold text-xl mb-4 group-hover:text-glow transition-all duration-300">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Learn More Button */}
              <Button 
                variant="ghost" 
                className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>

              {/* Card Border Glow */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                ${solution.color === 'primary' ? 'shadow-[0_0_50px_hsl(var(--primary)/0.3)]' : ''}
                ${solution.color === 'secondary' ? 'shadow-[0_0_50px_hsl(var(--secondary)/0.3)]' : ''}
                ${solution.color === 'neural' ? 'shadow-[0_0_50px_hsl(var(--neural)/0.3)]' : ''}
                ${solution.color === 'accent' ? 'shadow-[0_0_50px_hsl(var(--accent)/0.3)]' : ''}
              `} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to see how AI can transform your specific business needs?
          </p>
          <Button asChild className="btn-ai-secondary">
            <a 
              href="https://calendly.com/krishnangovindan/ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;