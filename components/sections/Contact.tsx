import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Contact us today for a personalized quote and let us help you with your heavy equipment needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-primary-200">#38 Sampanguita St. Aranzazu Subd., Burgos Rodriguez Rizal</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-primary-200">+63 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-primary-200">info@eme-corp.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+63123456789" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Form Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Quick Contact</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-primary-800 placeholder-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-primary-800 placeholder-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900">
                  <option>Select a service</option>
                  <option>Hauling Services</option>
                  <option>Equipment Rentals</option>
                  <option>Truck Parts Sales</option>
                  <option>Heavy Equipment Dealership</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-dark-900 placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-dark-900 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-900 text-white hover:bg-dark-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
