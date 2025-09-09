import Link from 'next/link'
import { Truck, Wrench, Package, Building, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Hauling Services',
      description: 'Professional transportation and hauling services for aggregates and construction materials.',
      features: ['Reliable Transportation', 'Various Truck Sizes', 'Experienced Drivers', 'Timely Delivery'],
      color: 'primary'
    },
    {
      icon: Wrench,
      title: 'Equipment Rentals',
      description: 'Comprehensive heavy equipment rental services for all your construction needs.',
      features: ['Wide Range of Equipment', 'Well-Maintained Machinery', 'Flexible Terms', 'Technical Support'],
      color: 'accent'
    },
    {
      icon: Package,
      title: 'Truck Parts Sales',
      description: 'High-quality truck and heavy equipment parts for maintenance and repairs.',
      features: ['Genuine Parts', 'Fast Delivery', 'Expert Advice', 'Quality Guarantee'],
      color: 'primary'
    },
    {
      icon: Building,
      title: 'Heavy Equipment Dealership',
      description: 'New and used heavy equipment sales with comprehensive support services.',
      features: ['New & Pre-owned', 'Financing Options', 'Trade-in Programs', 'After-sales Support'],
      color: 'accent'
    }
  ]

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Comprehensive heavy equipment solutions for all your construction and hauling needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-700 rounded-2xl p-8 border border-dark-600 card-hover group"
            >
              <div className={`p-4 bg-${service.color}-500/10 rounded-lg inline-block mb-6 group-hover:bg-${service.color}-500/20 transition-colors`}>
                <service.icon className={`h-8 w-8 text-${service.color}-400`} />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-dark-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full mr-3`}></div>
                    <span className="text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className={`inline-flex items-center text-${service.color}-400 hover:text-${service.color}-300 font-medium transition-colors group`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
