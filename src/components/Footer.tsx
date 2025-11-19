import { Linkedin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { solutions } from "@/components/Solutions";

const Footer = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  // Map footer service names to solution titles
  const serviceMapping: { [key: string]: string } = {
    "Social Media Automation": "Social Media Automation",
    "Website Creation": "Website Creation",
    "AI Video Editing": "AI Video Editing",
    "Blog Automation": "Blog Automation",
    "Landing Pages": "Landing Page Creation",
    "AI Brand Clone": "AI Clone for Your Brand",
    "Chatbot Building": "Chatbot Building"
  };

  const handleServiceClick = (serviceName: string) => {
    const solutionTitle = serviceMapping[serviceName];
    const solution = solutions.find(s => s.title === solutionTitle);
    if (solution) {
      setSelectedSolution(solution);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-lg border-t border-primary/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)/0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--secondary)/0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="fulsuccess" 
                className="h-12 brightness-0 invert"
              />
              <span className="text-2xl font-orbitron font-bold text-gradient-primary">
                fulsuccess
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with cutting-edge AI automation, creativity, and growth-focused strategies.
            </p>

            {/* CTA Button */}
            <Button asChild className="btn-neural">
              <a 
                href="https://calendly.com/krishnangovindan/ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Free Call
              </a>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-orbitron font-semibold text-lg text-primary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'Solutions', 'About', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-orbitron font-semibold text-lg text-secondary">
              AI Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Social Media Automation',
                'Website Creation',
                'AI Video Editing',
                'Blog Automation',
                'Landing Pages',
                'AI Brand Clone',
                'Chatbot Building'
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300 cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="font-orbitron font-semibold text-lg text-neural">
              Connect
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:coachkrishnangovindan@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">coachkrishnangovindan@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Follow us on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/fulsuccess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582589348073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-secondary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 fulsuccess. All rights reserved. Built with cutting-edge AI technology.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <Button asChild variant="ghost" size="sm" className="text-xs">
              <a 
                href="https://calendly.com/krishnangovindan/ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      {/* Solution Details Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-lg border-primary/20">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedSolution && (
                <div className="p-3 rounded-lg bg-primary/10">
                  <selectedSolution.icon className="w-8 h-8 text-primary" />
                </div>
              )}
              <DialogTitle className="text-2xl font-orbitron">
                {selectedSolution?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed text-foreground/80">
              {selectedSolution?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button asChild className="w-full btn-neural">
              <a 
                href="https://calendly.com/krishnangovindan/ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;