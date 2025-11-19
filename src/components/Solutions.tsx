import { 
  Share2, 
  Bot, 
  Globe, 
  FileText, 
  PenTool, 
  Video, 
  UserCheck,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const solutions = [
  {
    icon: Share2,
    title: "Social Media Ads Creation",
    description: "AI-driven campaigns that convert and engage your target audience with precision.",
    detailedDescription: "Our AI-powered social media advertising solution leverages advanced machine learning algorithms to create highly targeted campaigns across all major platforms including Facebook, Instagram, LinkedIn, and Twitter. We analyze your audience demographics, behavior patterns, and engagement metrics to craft compelling ad copy and visuals that drive conversions. Our system continuously optimizes your campaigns in real-time, adjusting targeting parameters, bid strategies, and creative elements to maximize ROI while minimizing ad spend.",
    color: "primary",
    delay: "0s"
  },
  {
    icon: Bot,
    title: "Social Media Automation",
    description: "Auto-posting & engagement systems that keep your brand active 24/7.",
    detailedDescription: "Transform your social media presence with our intelligent automation platform. Our AI system schedules and publishes content at optimal times when your audience is most active, ensuring maximum visibility and engagement. The platform monitors mentions, comments, and messages across all your social channels, automatically responding to common queries while flagging important conversations for human review. It also curates relevant content from your industry, suggests trending hashtags, and provides detailed analytics to refine your social media strategy.",
    color: "secondary",
    delay: "0.1s"
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Modern, responsive, animated websites that captivate and convert visitors.",
    detailedDescription: "We build stunning, high-performance websites that work flawlessly across all devices and browsers. Each website features modern design principles, smooth animations, and intuitive navigation that guides visitors toward conversion. Our development process includes SEO optimization, fast loading times, accessibility compliance, and integration with analytics tools. Whether you need an e-commerce platform, corporate website, or landing page, we deliver responsive designs with clean code, secure hosting, and ongoing maintenance support.",
    color: "neural",
    delay: "0.2s"
  },
  {
    icon: FileText,
    title: "Landing Page Creation",
    description: "Conversion-focused designs that turn visitors into customers instantly.",
    detailedDescription: "Our landing pages are meticulously crafted to maximize conversions through strategic placement of compelling headlines, persuasive copy, and clear calls-to-action. Each page is A/B tested for optimal performance, with heat mapping and user behavior analysis to continuously improve conversion rates. We implement proven psychological triggers, social proof elements, and urgency tactics while maintaining a clean, professional aesthetic. Every landing page is mobile-optimized, loads in under 2 seconds, and integrates seamlessly with your CRM and email marketing tools.",
    color: "accent",
    delay: "0.3s"
  },
  {
    icon: PenTool,
    title: "Blog Automation",
    description: "Auto-generate and post engaging blogs daily to boost your SEO ranking.",
    detailedDescription: "Elevate your content marketing with our AI-powered blog automation system. Our platform researches trending topics in your industry, generates well-written, SEO-optimized articles, and publishes them on a consistent schedule. Each blog post is tailored to your brand voice, includes relevant keywords, internal links, and engaging multimedia elements. The system also handles meta descriptions, image optimization, and social media promotion. Analytics tracking shows which topics resonate with your audience, allowing continuous refinement of your content strategy to improve search rankings and drive organic traffic.",
    color: "primary",
    delay: "0.4s"
  },
  {
    icon: Video,
    title: "AI Video Editing",
    description: "Smart, quick, professional video production that saves time and money.",
    detailedDescription: "Our AI video editing service transforms raw footage into polished, professional videos in a fraction of the time traditional editing requires. The AI automatically identifies the best clips, removes awkward pauses, adds smooth transitions, and synchronizes audio. It can add subtitles, overlay graphics, apply color grading, and even suggest background music that matches your video's mood. Perfect for creating social media content, product demos, testimonials, or marketing videos. The platform supports all major video formats and can optimize output for different platforms and devices.",
    color: "secondary",
    delay: "0.5s"
  },
  {
    icon: UserCheck,
    title: "AI Clone for Your Brand",
    description: "Personalized AI avatar and voice clone that represents your brand 24/7.",
    detailedDescription: "Create a digital version of yourself or your brand spokesperson that can engage with customers around the clock. Our AI cloning technology captures your voice, speech patterns, and communication style to create an authentic digital representative. This AI clone can handle video calls, answer customer questions, deliver presentations, and create personalized video messages at scale. It's perfect for customer support, sales demos, training videos, and maintaining a consistent brand presence across multiple channels simultaneously. The clone learns and improves from each interaction while maintaining your unique personality and expertise.",
    color: "neural",
    delay: "0.6s"
  },
  {
    icon: MessageSquare,
    title: "Chatbot Building",
    description: "Intelligent AI chatbots that handle customer queries, boost engagement, and drive sales 24/7.",
    detailedDescription: "Deploy sophisticated AI chatbots that provide instant, accurate responses to customer inquiries at any time of day. Our chatbots are trained on your business data, products, and services to deliver personalized assistance that feels natural and helpful. They can qualify leads, schedule appointments, process orders, troubleshoot issues, and seamlessly escalate complex queries to human agents when needed. The system integrates with your existing CRM, help desk, and e-commerce platforms, providing valuable insights into customer needs and behavior patterns. Advanced natural language processing ensures the chatbot understands context, intent, and sentiment for more meaningful conversations.",
    color: "accent",
    delay: "0.7s"
  }
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
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
                onClick={() => setSelectedSolution(solution)}
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

      {/* Solution Details Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedSolution && (
                <>
                  <div className={`
                    p-3 rounded-lg
                    ${selectedSolution.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                    ${selectedSolution.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                    ${selectedSolution.color === 'neural' ? 'bg-neural/10 text-neural' : ''}
                    ${selectedSolution.color === 'accent' ? 'bg-accent/10 text-accent' : ''}
                  `}>
                    <selectedSolution.icon className="w-8 h-8" />
                  </div>
                  <DialogTitle className="text-2xl font-orbitron">
                    {selectedSolution.title}
                  </DialogTitle>
                </>
              )}
            </div>
            <DialogDescription className="text-base leading-relaxed text-foreground/90">
              {selectedSolution?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <Button asChild className="btn-ai-secondary">
              <a 
                href="https://calendly.com/krishnangovindan/ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Solutions;