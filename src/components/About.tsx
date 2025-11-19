import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/human-ai-collaboration.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-secondary/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient-primary">
                About Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We help businesses <span className="text-primary font-semibold">adapt to the future</span> with 
              AI-driven solutions. Our mission is to make AI <span className="text-neural font-semibold">simple</span>, 
              <span className="text-secondary font-semibold"> accessible</span>, and 
              <span className="text-accent font-semibold"> profitable</span> for you.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-ai group">
                <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-orbitron font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">AI specialists with proven track records</p>
              </div>
              
              <div className="card-ai group">
                <Target className="w-8 h-8 text-neural mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-orbitron font-semibold text-lg mb-2">Results-Driven</h3>
                <p className="text-muted-foreground text-sm">Focused on measurable business growth</p>
              </div>
              
              <div className="card-ai group">
                <Lightbulb className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-orbitron font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">Cutting-edge AI technology implementation</p>
              </div>
              
              <div className="card-ai group">
                <TrendingUp className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-orbitron font-semibold text-lg mb-2">Growth Focus</h3>
                <p className="text-muted-foreground text-sm">Strategies designed for scalable success</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl card-neural group">
              <img 
                src={aboutImage} 
                alt="Human AI Collaboration" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="card-ai backdrop-blur-xl bg-card/30">
                    <div className="text-2xl font-orbitron font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  
                  <div className="card-ai backdrop-blur-xl bg-card/30">
                    <div className="text-2xl font-orbitron font-bold text-neural">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-neural/15 to-accent/15 rounded-full blur-2xl float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;