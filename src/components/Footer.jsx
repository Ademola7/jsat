import { Link } from "react-router-dom";
// import JSAT from "../assets/JSAT.svg";
import footerLogo from "../assets/footerLogo.png";
import footerJSAT from "../assets/footerJSAT.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-5">
        {/* Logo */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={footerLogo} alt="JSAT" />
            <img src={footerJSAT} alt="JSAT" />
          </Link>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline">
                News & Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:underline">
                Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/reports" className="hover:underline">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-4">
            <a href="mailto:hello@jsat.com" className="hover:underline">
              hello@jsat.com
            </a>
          </p>

          <h4 className="font-semibold mb-3">Connect With Us!</h4>
          <div className="flex gap-4 text-lg">
            <a
              href="https://wa.me/234000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600 py-4 text-center text-sm">
        © 2026 JSAT, All Rights Reserved.
      </div>
    </footer>
  );
}
