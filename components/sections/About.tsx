import Link from 'next/link'
import { Users, Award, Target, ArrowRight } from 'lucide-react'
import VideoPlayer from '@/components/ui/VideoPlayer'

const About = () => {
  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title text-left mb-6">About EME</h2>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              Leading provider of heavy equipment and hauling services with a commitment to quality and reliability.
            </p>
            
            <div className="space-y-6 mb-8">
              <p className="text-dark-300 leading-relaxed">
                EME Corporation has established itself as a trusted name in the heavy equipment industry. 
                We specialize in providing high-quality aggregates and merchandising trucks and heavy equipment parts 
                to clients across the region.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us the preferred choice 
                for businesses requiring reliable heavy equipment solutions.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-sm text-dark-300">Experienced professionals</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                  <Award className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Quality Service</h3>
                <p className="text-sm text-dark-300">Commitment to excellence</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                  <Target className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Reliable Solutions</h3>
                <p className="text-sm text-dark-300">Trusted by clients</p>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center btn-primary">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Leadership Cards */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Leadership</h3>
              <p className="text-dark-300">Meet the experienced team driving EME's success</p>
            </div>

            {/* Paul Fernandez */}
            <div className="bg-dark-700 rounded-2xl border border-dark-600 card-hover overflow-hidden group">
              {/* Video Preview */}
              <div className="relative aspect-video bg-dark-800">
                <VideoPlayer
                  sources={[
                    { src: '/videos/paul-fernandez-intro-minimal.mp4', type: 'video/mp4' },
                    { src: '/videos/paul-fernandez-intro-compatible.mp4', type: 'video/mp4' },
                    { src: '/videos/paul-fernandez-intro-light.mp4', type: 'video/mp4' },
                    { src: '/videos/paul-fernandez-intro.mp4', type: 'video/mp4' },
                    { src: '/videos/paul-fernandez-intro.mov', type: 'video/quicktime' },
                    { src: '/videos/IMG_0475.MOV', type: 'video/quicktime' }
                  ]}
                  className="aspect-video"
                  controls={false}
                  muted={true}
                  preload="metadata"
                  poster="/images/paul-fernandez-poster.jpg"
                  cropVertical={true}
                  fallbackContent={
                    <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-dark-900">PF</span>
                      </div>
                    </div>
                  }
                />
                {/* Hover Play Button Overlay */}
                <Link href="/about" className="absolute inset-0 flex items-center justify-center bg-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <div className="w-16 h-16 bg-primary-500/80 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </Link>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold text-dark-900">PF</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-white">Paul Fernandez</h4>
                    <p className="text-primary-400 font-medium text-sm">President</p>
                  </div>
                </div>
                <p className="text-dark-300 leading-relaxed mb-4 text-sm">
                  Visionary leader with extensive experience in heavy equipment and business operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary-500/10 text-primary-300 px-2 py-1 rounded-full">
                    Rock Castles Records
                  </span>
                  <span className="text-xs bg-primary-500/10 text-primary-300 px-2 py-1 rounded-full">
                    Eagles Club
                  </span>
                </div>
              </div>
            </div>

            {/* Jenny Fernandez */}
            <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-dark-900">JF</span>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white">Jenny Fernandez</h4>
                  <p className="text-accent-400 font-medium">Vice President</p>
                </div>
              </div>
              <p className="text-dark-300 leading-relaxed mb-4">
                Strategic operations leader focused on client relationships and business development. 
                Ensures EME maintains its reputation for excellence and reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent-500/10 text-accent-300 px-3 py-1 rounded-full">
                  Operations
                </span>
                <span className="text-xs bg-accent-500/10 text-accent-300 px-3 py-1 rounded-full">
                  Client Relations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
