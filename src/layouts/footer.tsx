import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logoImage from "@/assets/logo/git-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="GIT Inc. Logo"
                className="w-14 h-14 rounded-md"
              />
              <span className="text-xl font-bold text-[#FF6B35]">GIT Inc.</span>
            </div>
            <p className="hidden md:block text-sm text-gray-600">
              &copy; 2025 GIT Inc. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-[#FF6B35]" />
                <span>+855 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-[#FF6B35]" />
                <span>info@gitinc.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#FF6B35]" />
                <span>123 Tech Drive, Innovation City</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-1 items-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex md:hidden justify-center">
            <p>&copy; 2025 GIT Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
