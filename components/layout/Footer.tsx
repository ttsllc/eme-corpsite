import Link from 'next/link'
import { Truck, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission & Vision', href: '/mission' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Hauling Services', href: '/services#hauling' },
      { name: 'Equipment Rentals', href: '/services#rentals' },
      { name: 'Truck Parts Sales', href: '/services#parts' },
      { name: 'Heavy Equipment Dealership', href: '/services#dealership' },
    ],
    equipment: [
      { name: 'Loader', href: '/equipment#loader' },
      { name: 'Backhoe', href: '/equipment#backhoe' },
      { name: 'Dump Trucks', href: '/equipment#dump-trucks' },
      { name: 'Mini Dump Truck', href: '/equipment#mini-dump' },
    ],
  }

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                <Truck className="h-8 w-8 text-dark-900" />
              </div>
              <div>
                <span className="text-2xl font-display font-bold text-white">EME</span>
                <p className="text-xs text-dark-300 -mt-1">Heavy Equipment</p>
              </div>
            </Link>
            <p className="text-dark-300 mb-6 leading-relaxed">
              We are providing high quality aggregates and merchandising trucks and heavy equipment parts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-dark-300 text-sm">
                  #38 Sampanguita St. Aranzazu Subd.<br />
                  Burgos Rodriguez Rizal
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:info@eme-corp.com" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  info@eme-corp.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a href="tel:+63123456789" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  +63 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Equipment</h3>
            <ul className="space-y-3">
              {navigation.equipment.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-dark-400 text-sm">
              © 2024 EME Corporation. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-700 hover:bg-primary-500 transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-dark-300 group-hover:text-dark-900" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-700 hover:bg-primary-500 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-dark-300 group-hover:text-dark-900" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-700 hover:bg-primary-500 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-dark-300 group-hover:text-dark-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
