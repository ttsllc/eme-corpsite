import { Truck, Wrench, Package, Building } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 'hauling',
      icon: Truck,
      title: 'Hauling Services',
      description: 'Professional transportation and hauling services for aggregates and construction materials.',
      features: [
        'Reliable transportation solutions',
        'Various truck sizes available',
        'Experienced drivers',
        'Timely delivery guarantee',
        'Competitive pricing'
      ],
      image: 'https://images.unsplash.com/photo-1566328386401-b2980125f6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rentals',
      icon: Wrench,
      title: 'Equipment Rentals',
      description: 'Comprehensive heavy equipment rental services for all your construction needs.',
      features: [
        'Wide range of equipment',
        'Well-maintained machinery',
        'Flexible rental terms',
        'Technical support included',
        'Competitive daily/monthly rates'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'parts',
      icon: Package,
      title: 'Truck Parts Sales',
      description: 'High-quality truck and heavy equipment parts for maintenance and repairs.',
      features: [
        'Genuine and aftermarket parts',
        'Fast parts delivery',
        'Expert technical advice',
        'Competitive pricing',
        'Quality guarantee'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dealership',
      icon: Building,
      title: 'Heavy Equipment Dealership',
      description: 'New and used heavy equipment sales with comprehensive support services.',
      features: [
        'New and pre-owned equipment',
        'Financing options available',
        'Trade-in programs',
        'After-sales support',
        'Warranty coverage'
      ],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="section-title text-gradient mb-6">Our Services</h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive heavy equipment solutions for all your construction and hauling needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-primary-400" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                          <span className="text-dark-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary">Request Quote</button>
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-dark-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-dark-800 mb-8">
              Contact us today for a personalized quote and let us help you with your heavy equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-dark-900 text-white hover:bg-dark-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Get Free Quote
              </button>
              <button className="bg-transparent border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
