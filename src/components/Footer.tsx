import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">SyntaxTrust</span>
          </div>
          
          <p className="text-muted-foreground text-center max-w-md">
            Jasa pembuatan website profesional untuk tugas kuliah, modifikasi, dan pembuatan dari nol
          </p>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SyntaxTrust. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
