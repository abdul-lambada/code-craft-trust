import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Wrench, Rocket } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Website Tugas Kuliah",
    description: "Pembuatan website untuk memenuhi tugas kuliah Anda dengan kualitas profesional dan tepat waktu.",
    features: ["Desain modern", "Responsive", "Dokumentasi lengkap", "Revisi gratis"]
  },
  {
    icon: Wrench,
    title: "Modifikasi Website",
    description: "Tingkatkan dan perbaharui website existing Anda dengan fitur-fitur baru dan desain yang lebih menarik.",
    features: ["Update fitur", "Perbaikan bug", "Optimasi performa", "Redesign UI/UX"]
  },
  {
    icon: Rocket,
    title: "Website dari Nol",
    description: "Bangun website impian Anda dari awal dengan teknologi terkini dan desain yang sesuai kebutuhan.",
    features: ["Custom design", "Full-stack development", "SEO friendly", "Maintenance support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Layanan <span className="bg-gradient-primary bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan website Anda dengan harga yang terjangkau
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
