import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Mulai <span className="bg-gradient-primary bg-clip-text text-transparent">Project Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ceritakan kebutuhan project Anda dan dapatkan konsultasi gratis dari kami
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageSquare className="w-6 h-6 text-primary" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nama
                  </label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan / Deskripsi Project
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan tentang project Anda, fitur yang diinginkan, deadline, dan budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>Atau email langsung ke: <a href="mailto:info@syntaxtrust.com" className="text-primary hover:underline">info@syntaxtrust.com</a></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
