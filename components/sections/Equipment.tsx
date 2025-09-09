import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Settings, Award } from 'lucide-react'

const Equipment = () => {
  const equipment = [
    {
      name: 'Loader',
      description: 'Heavy-duty loaders for efficient material handling and construction operations.',
      specs: '15,000 - 25,000 lbs • 2.5 - 4.0 cubic yards',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      available: true
    },
    {
      name: 'Backhoe',
      description: 'Versatile backhoe loaders perfect for excavation, loading, and general construction work.',
      specs: '18,000 - 22,000 lbs • 18 - 21 feet digging depth',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      available: true
    },
    {
      name: 'Dump Trucks',
      description: 'Heavy-duty 10 & 12 wheeler dump trucks for large-scale hauling and transportation.',
      specs: '25 - 35 tons • 350 - 450 HP',
      image: 'https://images.unsplash.com/photo-1566328386401-b2980125f6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      available: true
    },
    {
      name: 'Mini Dump Truck',
      description: 'Compact dump trucks ideal for smaller construction sites and urban projects.',
      specs: '3 - 5 tons • Compact design for tight spaces',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      available: true
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Equipment</h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Professional-grade heavy equipment for all your construction and hauling needs.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 card-hover group"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                
                {/* Availability Badge */}
                {item.available && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-dark-900 text-xs font-semibold px-3 py-1 rounded-full">
                      Available
                    </span>
                  </div>
                )}

                {/* Equipment Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-dark-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center text-sm text-primary-400 mb-4">
                  <Settings className="h-4 w-4 mr-2" />
                  <span>{item.specs}</span>
                </div>

                <Link
                  href="/equipment"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
              <Settings className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-dark-300">Equipment Units</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
              <Award className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">99%</h3>
            <p className="text-dark-300">Uptime Rate</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
              <Settings className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
            <p className="text-dark-300">Support</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
              <Award className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
            <p className="text-dark-300">Years Experience</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/equipment" className="btn-primary">
            View All Equipment
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Equipment
