'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '#38 Sampanguita St. Aranzazu Subd.',
        'Burgos Rodriguez Rizal'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+63 123 456 789', '+63 987 654 321']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eme-corp.com', 'sales@eme-corp.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="section-title text-gradient mb-6">Contact Us</h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for all your heavy equipment and hauling service needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                  <info.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-dark-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                      placeholder="+63 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="hauling">Hauling Services</option>
                    <option value="rentals">Equipment Rentals</option>
                    <option value="parts">Truck Parts Sales</option>
                    <option value="dealership">Heavy Equipment Dealership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Find Our Location</h2>
              
              {/* Map Placeholder */}
              <div className="bg-dark-800 rounded-lg p-8 mb-8 text-center">
                <MapPin className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Office</h3>
                <p className="text-dark-300 mb-4">
                  #38 Sampanguita St. Aranzazu Subd.<br />
                  Burgos Rodriguez Rizal
                </p>
                <button className="btn-secondary">
                  Open in Maps
                </button>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-dark-800 mb-6">
                  For urgent inquiries or emergency equipment needs, contact us directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+63123456789"
                    className="flex items-center text-dark-900 hover:text-dark-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    <span className="font-semibold">+63 123 456 789</span>
                  </a>
                  <a
                    href="mailto:info@eme-corp.com"
                    className="flex items-center text-dark-900 hover:text-dark-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="font-semibold">info@eme-corp.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Contact */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Connect directly with our experienced leadership team for important business matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paul Fernandez */}
            <div className="bg-dark-700 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-dark-900">PF</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Paul Fernandez</h3>
              <p className="text-primary-400 font-medium mb-4">President</p>
              <p className="text-dark-300 text-sm mb-6">
                Strategic decisions, partnerships, and major project consultations.
              </p>
              <button className="btn-primary w-full">Contact President</button>
            </div>

            {/* Jenny Fernandez */}
            <div className="bg-dark-700 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-dark-900">JF</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Jenny Fernandez</h3>
              <p className="text-accent-400 font-medium mb-4">Vice President</p>
              <p className="text-dark-300 text-sm mb-6">
                Operations, client relations, and day-to-day business inquiries.
              </p>
              <button className="btn-accent w-full">Contact Vice President</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
