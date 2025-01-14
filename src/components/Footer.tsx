import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  Mail
} from "lucide-react"

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    { name: "Commercial", href: "/commercial" },
    { name: "Residential", href: "/residential" },
    { name: "Barndominiums", href: "/barndominiums" },
    { name: "Custom Builds", href: "/custom-builds" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  const socialLinks = [
    { icon: <FacebookIcon className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <TwitterIcon className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://linkedin.com" },
  ]

  return (
      <footer className="bg-slate-900 text-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-100">Builtec</h2>
              <p className="text-gray-400 text-sm">
                Building excellence through innovation and craftsmanship. Your vision, our expertise.
              </p>
              {/* Newsletter Signup */}
              <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-[200px] bg-slate-800 border-slate-700 text-gray-100 placeholder:text-gray-500"
                />
                <Button variant="secondary" size="sm" className="whitespace-nowrap bg-gray-300 hover:bg-gray-200 text-slate-900">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-300 mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a
                          href={link.href}
                          className="text-gray-400 hover:text-gray-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-gray-300 mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <a
                          href={link.href}
                          className="text-gray-400 hover:text-gray-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-300">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>123 Construction Way</p>
                <p>Building City, BC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@builtec.com</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Builtec. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                  <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gray-300"
                  >
                    {link.name}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer