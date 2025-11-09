import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";

import ecommerceImg from "@/assets/portfolio/ecommerce.jpg";
import corporateImg from "@/assets/portfolio/corporate.jpg";
import educationImg from "@/assets/portfolio/education.jpg";
import restaurantImg from "@/assets/portfolio/restaurant.jpg";
import portfolioImg from "@/assets/portfolio/portfolio.jpg";
import blogImg from "@/assets/portfolio/blog.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "Platform e-commerce modern dengan sistem pembayaran terintegrasi dan manajemen produk lengkap",
    image: ecommerceImg,
    tags: ["React", "Payment Gateway", "Admin Dashboard"]
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Business",
    description: "Website perusahaan profesional dengan company profile, portfolio, dan form kontak",
    image: corporateImg,
    tags: ["Responsive", "SEO Optimized", "CMS"]
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "Education",
    description: "Platform pembelajaran online dengan sistem kursus, quiz, dan tracking progress siswa",
    image: educationImg,
    tags: ["LMS", "Video Streaming", "Certificates"]
  },
  {
    id: 4,
    title: "Restaurant Ordering",
    category: "F&B",
    description: "Website pemesanan makanan online dengan menu interaktif dan sistem booking meja",
    image: restaurantImg,
    tags: ["Online Order", "Real-time", "Mobile Friendly"]
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Portfolio",
    description: "Website portfolio kreatif untuk menampilkan project dan skills dengan desain yang menarik",
    image: portfolioImg,
    tags: ["Animations", "Interactive", "Modern Design"]
  },
  {
    id: 6,
    title: "News & Blog Platform",
    category: "Media",
    description: "Platform blog dan berita dengan sistem kategori, search, dan komentar",
    image: blogImg,
    tags: ["Blog", "CMS", "Social Share"]
  }
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Portfolio <span className="bg-gradient-primary bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beberapa contoh website yang telah kami buat untuk berbagai kebutuhan dan industri
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-5xl p-0 gap-0 overflow-hidden">
            {selectedItem && (
              <div className="relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors rounded-full p-2 shadow-lg"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative aspect-[4/3] bg-muted">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{selectedItem.category}</Badge>
                    <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
