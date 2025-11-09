import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import client1 from "@/assets/testimonials/client1.jpg";
import client2 from "@/assets/testimonials/client2.jpg";
import client3 from "@/assets/testimonials/client3.jpg";
import client4 from "@/assets/testimonials/client4.jpg";
import client5 from "@/assets/testimonials/client5.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rizky Pratama",
    role: "Mahasiswa Informatika",
    company: "Universitas Indonesia",
    image: client1,
    rating: 5,
    review: "Sangat membantu untuk tugas akhir kuliah saya! Website dibuat dengan cepat, desainnya modern, dan dokumentasinya lengkap. Harga juga sangat terjangkau untuk mahasiswa. Highly recommended!"
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Owner",
    company: "Boutique Fashion",
    image: client2,
    rating: 5,
    review: "Website toko online saya sekarang jauh lebih professional dan mudah digunakan. Tim SyntaxTrust sangat responsif dan memahami kebutuhan bisnis saya. Penjualan meningkat 40% setelah launch!"
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Direktur",
    company: "PT Maju Jaya",
    image: client3,
    rating: 5,
    review: "Pelayanan yang sangat memuaskan! Website perusahaan kami dimodifikasi sesuai kebutuhan dengan hasil yang melebihi ekspektasi. Proses komunikasi lancar dan timeline tepat waktu."
  },
  {
    id: 4,
    name: "Dinda Putri",
    role: "Mahasiswa Sistem Informasi",
    company: "Institut Teknologi Bandung",
    image: client4,
    rating: 5,
    review: "Project tugas kuliah saya selesai lebih cepat dari deadline! Hasilnya rapi, kode nya clean, dan dapat nilai A. Terima kasih SyntaxTrust, pasti akan order lagi untuk project selanjutnya."
  },
  {
    id: 5,
    name: "Andi Wijaya",
    role: "Founder",
    company: "TechStart Indonesia",
    image: client5,
    rating: 5,
    review: "Tim yang sangat profesional dan kreatif! Mereka membangun website startup kami dari nol dengan fitur-fitur yang kompleks. Hasil akhirnya luar biasa dan investor kami sangat terkesan!"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Apa Kata <span className="bg-gradient-primary bg-clip-text text-transparent">Klien Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari klien yang telah mempercayai kami untuk membuat website mereka
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <Card className="h-full shadow-soft border-border/50 hover:shadow-hover transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <Quote className="w-10 h-10 text-primary/20" />
                      
                      <p className="text-muted-foreground italic min-h-[120px]">
                        "{testimonial.review}"
                      </p>
                      
                      <StarRating rating={testimonial.rating} />
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
