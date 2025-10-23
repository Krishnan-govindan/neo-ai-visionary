import { Linkedin, Youtube, Instagram, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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
              <img src="/logo.png" alt="fulsuccess" className="h-12" />
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block"
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
                  <span className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    {service}
                  </span>
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
                href="mailto:contact@fulsuccess.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@fulsuccess.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Follow us on social media</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#", color: "text-primary" },
                  { icon: Youtube, href: "#", color: "text-secondary" },
                  { icon: Instagram, href: "#", color: "text-neural" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
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
    </footer>
  );
};

export default Footer;