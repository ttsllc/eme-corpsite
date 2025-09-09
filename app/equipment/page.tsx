import Image from 'next/image'
import { Settings, Gauge, Users, Award } from 'lucide-react'

export default function Equipment() {
  const equipment = [
    {
      id: 'loader',
      name: 'Loader',
      description: 'Heavy-duty loaders for efficient material handling and construction operations.',
      specifications: [
        'Operating Weight: 15,000 - 25,000 lbs',
        'Bucket Capacity: 2.5 - 4.0 cubic yards',
        'Engine Power: 150 - 250 HP',
        'Max Lift Height: 12 - 15 feet'
      ],
      features: [
        'High-performance hydraulic system',
        'Comfortable operator cabin',
        'Advanced safety features',
        'Fuel-efficient engine'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      available: true
    },
    {
      id: 'backhoe',
      name: 'Backhoe',
      description: 'Versatile backhoe loaders perfect for excavation, loading, and general construction work.',
      specifications: [
        'Operating Weight: 18,000 - 22,000 lbs',
        'Digging Depth: 18 - 21 feet',
        'Engine Power: 100 - 120 HP',
        'Bucket Capacity: 1.0 - 1.5 cubic yards'
      ],
      features: [
        '4WD capability',
        'Extendable boom option',
        'Quick-attach system',
        'Enhanced visibility'
      ],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      available: true
    },
    {
      id: 'dump-trucks',
      name: '10 & 12 Wheeler Dump Trucks',
      description: 'Heavy-duty dump trucks for large-scale hauling and transportation of aggregates.',
      specifications: [
        'Payload Capacity: 25 - 35 tons',
        'Engine Power: 350 - 450 HP',
        'Transmission: Manual/Automatic',
        'Dump Body: Steel construction'
      ],
      features: [
        'Hydraulic dump system',
        'Air brake system',
        'Heavy-duty suspension',
        'GPS tracking available'
      ],
      image: 'https://images.unsplash.com/photo-1566328386401-b2980125f6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      available: true
    },
    {
      id: 'mini-dump',
      name: 'Mini Dump Truck',
      description: 'Compact dump trucks ideal for smaller construction sites and urban projects.',
      specifications: [
        'Payload Capacity: 3 - 5 tons',
        'Engine Power: 120 - 150 HP',
        'Overall Length: 20 - 25 feet',
        'Turning Radius: Compact design'
      ],
      features: [
        'Maneuverability in tight spaces',
        'Fuel efficient operation',
        'Easy maintenance access',
        'Reliable hydraulic system'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      available: true
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="section-title text-gradient mb-6">Our Equipment</h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Professional-grade heavy equipment for all your construction and hauling needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Settings className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-dark-300">Equipment Units</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Gauge className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99%</h3>
              <p className="text-dark-300">Uptime</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Users className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-dark-300">Support</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Award className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-dark-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {equipment.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    {item.available && (
                      <span className="bg-green-500 text-dark-900 text-sm font-semibold px-3 py-1 rounded-full mr-4">
                        Available
                      </span>
                    )}
                    <span className="text-primary-400 font-medium">Heavy Equipment</span>
                  </div>
                  
                  <h2 className="text-4xl font-display font-bold text-white mb-6">{item.name}</h2>
                  
                  <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Specifications:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-dark-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-dark-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary">Request Rental</button>
                    <button className="btn-secondary">Get Specifications</button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-dark-900 mb-2">{item.name}</h4>
                        <p className="text-sm text-dark-700">Professional Grade Equipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Need Equipment for Your Project?
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Our equipment is regularly maintained and ready for immediate deployment. 
              Contact us for competitive rental rates and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Check Availability</button>
              <button className="btn-secondary">Download Catalog</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
