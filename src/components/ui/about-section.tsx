import { motion } from "framer-motion";
import { Rocket, Smartphone, Cloud, Settings } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: <Rocket className="text-primary w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technologies to meet your specific business requirements and scale with your growth.",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Smartphone className="text-blue-400 w-6 h-6" />,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <Cloud className="text-emerald-600 w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies that ensure reliability, security, and optimal performance.",
      bgColor: "bg-emerald-100"
    },
    {
      icon: <Settings className="text-purple-600 w-6 h-6" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Transforming Ideas Into Reality</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With over a decade of experience in software development, we specialize in creating 
            cutting-edge solutions that drive business growth and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Diverse software development team collaborating around a table"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
