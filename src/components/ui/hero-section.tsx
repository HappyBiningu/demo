import { motion } from "framer-motion";
import { CheckCircle, Users, Award } from "lucide-react";
import { Button } from "./button";

export default function HeroSection() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              of Technology
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We create innovative software solutions that transform businesses and drive digital growth.
              Partner with our expert team to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-emerald-500 w-5 h-5" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-emerald-500 w-5 h-5" />
                <span>50+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-emerald-500 w-5 h-5" />
                <span>Industry Leaders</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech office with multiple monitors and contemporary workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
