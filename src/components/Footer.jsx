import { Link } from "react-router-dom";
import ContainComponent from "./contain";
import {
  DiamondsFourIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const FOOTER_DATA = {
  sections: [
    {
      title: "Navigation",
      links: [
        { name: "Homepage", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Case studies", path: "/case-studies" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Strategy", path: "/services/strategy" },
        { name: "Operations", path: "/services/operations" },
        {
          name: "Digital Transformation",
          path: "/services/digital-transformation",
        },
        { name: "Change Management", path: "/services/change-management" },
      ],
    },
    {
      title: "Get in touch",
      links: [{ name: "Contact us", path: "/contact" }],
    },
    {
      title: "Legals & Info",
      links: [
        // { name: "Cookie Policy", path: "/cookies" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms-and-conditions" },
      ],
    },
  ],
  socials: [
    { icon: <LinkedinLogoIcon size={20} />, href: "https://linkedin.com" },
    { icon: <FacebookLogoIcon size={20} />, href: "https://facebook.com" },
    { icon: <InstagramLogoIcon size={20} />, href: "https://instagram.com" },
    { icon: <XLogoIcon size={20} />, href: "https://x.com" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <ContainComponent>
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 mb-10 w-fit hover:opacity-80 transition-opacity"
        >
          <DiamondsFourIcon
            size={32}
            weight="fill"
            className="text-[#a3b8b8]"
          />
          <span className="text-2xl font-medium tracking-tight">
            Companyname
          </span>
        </Link>

        <hr className="border-gray-700 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-20">
          {FOOTER_DATA.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="font-medium text-lg">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>© Companyname {currentYear}</span>
          </div>

          <div className="flex gap-4">
            {FOOTER_DATA.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </ContainComponent>
    </footer>
  );
}
