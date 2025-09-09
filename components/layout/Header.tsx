'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Truck } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Mission & Vision', href: '/mission' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-dark-900/95 backdrop-blur-sm z-50 border-b border-dark-700">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Truck className="h-8 w-8 text-dark-900" />
            </div>
            <div>
              <span className="text-2xl font-display font-bold text-white">EME</span>
              <p className="text-xs text-dark-300 -mt-1">Heavy Equipment</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-dark-300 hover:text-primary-400 font-medium py-2 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary mt-4 text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
