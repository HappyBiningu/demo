import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "./button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-400 rounded-lg flex items-center justify-center">
              <Code className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-secondary">TechFlow</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4">
            <div className="container mx-auto px-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-slate-600 hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-slate-600 hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-slate-600 hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-slate-600 hover:text-primary transition-colors duration-300"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-slate-600 hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-white hover:bg-blue-700 transition-colors duration-300 mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
