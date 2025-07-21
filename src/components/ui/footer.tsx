import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-400 rounded-lg flex items-center justify-center">
                <Code className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">TechFlow</span>
            </div>
            <p className="text-slate-400 mb-4">
              Building innovative software solutions that transform businesses and drive digital growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Digital Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>hello@techflow.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 TechFlow Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
