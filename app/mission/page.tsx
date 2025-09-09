import { Target, Eye, Heart, Shield, Users, Trophy } from 'lucide-react'

export default function Mission() {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in equipment quality and service delivery.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients\' success is our priority, driving everything we do.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for continuous improvement and exceptional performance.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="section-title text-gradient mb-6">Mission & Vision</h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Driving the future of heavy equipment services with quality, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 rounded-2xl mb-8 mx-auto lg:mx-0">
                <Target className="h-10 w-10 text-primary-400" />
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Our Mission</h2>
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
                <blockquote className="text-2xl font-medium text-primary-300 mb-6 leading-relaxed">
                  "To provide quality aggregates and equipment at affordable prices."
                </blockquote>
                <p className="text-dark-300 leading-relaxed">
                  We are committed to delivering exceptional value to our clients through 
                  high-quality products and services. Our mission drives us to maintain 
                  competitive pricing without compromising on the quality and reliability 
                  that our customers depend on.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-500/10 rounded-2xl mb-8 mx-auto lg:mx-0">
                <Eye className="h-10 w-10 text-accent-400" />
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Our Vision</h2>
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
                <blockquote className="text-2xl font-medium text-accent-300 mb-6 leading-relaxed">
                  "To become the top provider of quarry services."
                </blockquote>
                <p className="text-dark-300 leading-relaxed">
                  We envision EME as the leading force in the quarry and heavy equipment 
                  industry, recognized for innovation, reliability, and exceptional service. 
                  Our goal is to set the standard for excellence in our field.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Message */}
          <div className="text-center mb-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-8">Our Commitment</h2>
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12">
                <blockquote className="text-3xl md:text-4xl font-bold text-dark-900 leading-relaxed">
                  "We are providing high quality aggregates and merchandising trucks 
                  and heavy equipment parts."
                </blockquote>
                <p className="text-dark-800 mt-6 text-lg">
                  This commitment reflects our dedication to excellence in every aspect of our business.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              The principles that guide our operations and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="p-6 bg-dark-800 rounded-2xl border border-dark-700 card-hover h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-xl mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Achievements</h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Milestones that showcase our commitment to excellence and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-2">15+</div>
              <p className="text-dark-300 font-medium">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-2">500+</div>
              <p className="text-dark-300 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-2">100+</div>
              <p className="text-dark-300 font-medium">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-2">99%</div>
              <p className="text-dark-300 font-medium">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Experience the EME difference. Let us help you achieve your project goals 
              with our quality equipment and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
