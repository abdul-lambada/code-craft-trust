import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MessageCircle } from "lucide-react";

const pricingFactors = [
  {
    title: "Kompleksitas Desain",
    description: "Tingkat detail dan kustomisasi desain yang diinginkan"
  },
  {
    title: "Jumlah Halaman",
    description: "Berapa banyak halaman dan section yang dibutuhkan"
  },
  {
    title: "Fitur & Fungsionalitas",
    description: "Integrasi API, database, authentication, dll"
  },
  {
    title: "Deadline Project",
    description: "Waktu pengerjaan yang dibutuhkan"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Harga <span className="bg-gradient-primary bg-clip-text text-transparent">Fleksibel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setiap project memiliki kebutuhan yang berbeda. Kami menawarkan harga yang dapat disesuaikan dengan budget dan kompleksitas project Anda.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft border-border/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">Faktor Penentu Harga</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {pricingFactors.map((factor, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Konsultasi Gratis</h3>
                <p className="text-muted-foreground">
                  Hubungi kami untuk mendiskusikan project Anda dan dapatkan penawaran harga yang sesuai dengan kebutuhan dan budget Anda.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
