import { motion } from "framer-motion";

export default function ServicesGrid() {
  const technologies = [
    { name: "React & Next.js", icon: "fab fa-react", color: "text-blue-500" },
    { name: "Node.js & Express", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Python & Django", icon: "fab fa-python", color: "text-blue-600" },
    { name: "AWS & Azure", icon: "fab fa-aws", color: "text-orange-500" },
    { name: "Docker & Kubernetes", icon: "fab fa-docker", color: "text-blue-400" },
    { name: "MongoDB & PostgreSQL", icon: "fas fa-database", color: "text-gray-600" },
    { name: "Flutter & React Native", icon: "fab fa-flutter", color: "text-blue-400" },
    { name: "AI & Machine Learning", icon: "fas fa-brain", color: "text-purple-500" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Technology Stack</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We work with the latest technologies and frameworks to deliver modern, efficient solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl text-center hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <i className={`${tech.icon} text-4xl mb-4 ${tech.color} group-hover:text-white transition-colors duration-300`}></i>
              <h4 className="font-semibold">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
