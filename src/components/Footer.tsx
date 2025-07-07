import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaShoppingBag } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/carbonprintpro/", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/krkpkp", label: "Facebook" },
  { icon: <FaYoutube className="size-5" />, href: "https://www.youtube.com/@CarbonPrintLV", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/37126236432", label: "WhatsApp" },
  { icon: <FaShoppingBag className="size-5" />, href: "https://www.etsy.com/shop/carbonprint", label: "Etsy" },
];

const defaultLegalLinks = [
];

const Footer = ({
  logo = {
    url: "#",
    src: "/img/3d-print-logo.png",
    alt: "carbonprint logo",
    title: "carbonprint",
  },
  sections = defaultSections,
  description = "Wir sind Spezialisten für 3D-Druck und High-Performance-Design.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} carbonprint. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 bg-black">
      <div className="container">
        <div className="flex w-full flex-col items-center text-center gap-6">
          <div className="flex w-full flex-col items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold text-white">{logo.title}</h2>
            </div>
            <p className="text-gray-300 max-w-[70%] text-xs text-center">
              {description}
            </p>
            <ul className="text-gray-300 flex items-center justify-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-white font-medium transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-gray-300 mt-3 flex flex-col items-center text-center gap-3 py-3 text-xs font-medium">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };
