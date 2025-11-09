import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIwMCAxMDAlIDgwJSAvIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Solusi Website Profesional</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Wujudkan Website{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Impian Anda
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Jasa pembuatan website untuk tugas kuliah, modifikasi website existing, dan pembuatan website dari nol. 
              Harga fleksibel dan bisa dinegosiasi sesuai kompleksitas project Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
                Mulai Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Lihat Layanan
              </Button>
            </div>
          </div>
          
          <div className="relative lg:block hidden animate-fade-in-delayed">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Modern web development workspace" 
              className="relative rounded-2xl shadow-hover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
