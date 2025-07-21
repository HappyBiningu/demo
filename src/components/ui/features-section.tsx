import { motion } from "framer-motion";
import { Zap, Shield, SquareArrowOutUpLeft, Users, Headphones, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="text-primary w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for performance with cutting-edge technologies and best practices for maximum speed and efficiency.",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Shield className="text-blue-400 w-8 h-8" />,
      title: "Enterprise Security", 
      description: "Bank-level security measures and compliance standards to protect your data and ensure regulatory adherence.",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <SquareArrowOutUpLeft className="text-emerald-600 w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load and new features seamlessly over time.",
      bgColor: "bg-emerald-100"
    },
    {
      icon: <Users className="text-purple-600 w-8 h-8" />,
      title: "Expert Team",
      description: "Seasoned developers and architects with deep expertise in modern technologies and agile methodologies.",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Headphones className="text-orange-600 w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <TrendingUp className="text-indigo-600 w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics and reporting tools to help you make data-driven decisions and track success.",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose TechFlow?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine technical expertise with innovative thinking to deliver solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional visual content */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
              alt="Modern tech office with collaborative workspaces and innovation hub"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent rounded-2xl flex items-center">
              <div className="text-white p-8">
                <h3 className="text-2xl font-bold mb-2">Innovation Hub</h3>
                <p className="text-lg opacity-90">Where creativity meets technology</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
              alt="Digital innovation workspace with advanced technology and futuristic development environment"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-400/80 to-transparent rounded-2xl flex items-center justify-end">
              <div className="text-white p-8 text-right">
                <h3 className="text-2xl font-bold mb-2">Future Ready</h3>
                <p className="text-lg opacity-90">Cutting-edge solutions today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
