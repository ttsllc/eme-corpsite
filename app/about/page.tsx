import Image from 'next/image'
import { Users, Award, Target } from 'lucide-react'
import VideoPlayer from '@/components/ui/VideoPlayer'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="section-title text-gradient mb-6">About EME</h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Leading provider of heavy equipment and hauling services with a commitment to quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-dark-300 mb-6 leading-relaxed">
                EME Corporation has established itself as a trusted name in the heavy equipment industry. We specialize in providing high-quality aggregates and merchandising trucks and heavy equipment parts to clients across the region.
              </p>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us the preferred choice for businesses requiring reliable heavy equipment solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heavy equipment at work"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-500 p-6 rounded-lg">
                <p className="text-2xl font-bold text-dark-900">15+</p>
                <p className="text-sm text-dark-800">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Leadership</h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Meet the experienced leaders driving EME's success in the heavy equipment industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Paul Fernandez - Enhanced Design */}
            <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl overflow-hidden card-hover border border-dark-600/50 shadow-2xl">
              {/* Video Section with Enhanced Overlay */}
              <div className="relative">
                {/* Video Container - 自然なサイズ表示 */}
                <div className="relative bg-dark-900 rounded-lg overflow-hidden mx-auto max-w-sm">
                  <video 
                    className="w-full h-auto"
                    controls
                    muted
                    preload="metadata"
                    style={{ 
                      backgroundColor: 'transparent'
                    }}
                  >
                    <source src="/videos/paul-fernandez-intro-minimal.mp4" type="video/mp4" />
                    <source src="/videos/paul-fernandez-intro-compatible.mp4" type="video/mp4" />
                    <source src="/videos/IMG_0475.MOV" type="video/quicktime" />
                    お使いのブラウザは動画をサポートしていません。
                  </video>
                  
                  {/* Commented out VideoPlayer for comparison 
                  <VideoPlayer
                    sources={[
                      { src: '/videos/paul-fernandez-intro-minimal.mp4', type: 'video/mp4' },
                      { src: '/videos/paul-fernandez-intro-compatible.mp4', type: 'video/mp4' },
                      { src: '/videos/paul-fernandez-intro-light.mp4', type: 'video/mp4' },
                      { src: '/videos/paul-fernandez-intro.mp4', type: 'video/mp4' },
                      { src: '/videos/paul-fernandez-intro.mov', type: 'video/quicktime' },
                      { src: '/videos/IMG_0475.MOV', type: 'video/quicktime' }
                    ]}
                    className="w-full h-full"
                    controls={true}
                    muted={true}
                    preload="metadata"
                    cropVertical={false}
                    fallbackContent={
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <span className="text-3xl font-bold text-dark-900">PF</span>
                          </div>
                          <p className="text-white mb-2 font-medium">President Introduction</p>
                          <p className="text-sm text-dark-400">Your browser doesn't support video playback</p>
                        </div>
                      </div>
                    }
                  />
                  */}
                  
                  {/* Video Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-primary-500/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-white">LIVE</span>
                    </div>
                  </div>
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Name Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-dark-900/85 backdrop-blur-sm rounded-lg p-3 border border-dark-600/50">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-dark-900">PF</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-display font-bold text-white">Paul Fernandez</h4>
                          <p className="text-primary-400 font-medium text-xs">President & CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Info Section */}
              <div className="p-8 space-y-6">
                {/* Introduction */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 text-gradient">Paul Fernandez</h3>
                  <p className="text-primary-400 font-semibold mb-4 text-lg">President & Chief Executive Officer</p>
                  <p className="text-dark-200 leading-relaxed text-base">
                    Visionary leader with extensive experience in heavy equipment and business operations. 
                    Paul brings decades of industry expertise and strategic leadership to EME Corporation.
                  </p>
                </div>
                
                {/* Leadership Roles */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Leadership Roles
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-dark-600/30 rounded-lg border border-dark-600/50">
                      <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">EME Corporation</p>
                        <p className="text-dark-300 text-sm">President & CEO</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-dark-600/30 rounded-lg border border-dark-600/50">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Rock Castles Records</p>
                        <p className="text-dark-300 text-sm">President</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-dark-600/30 rounded-lg border border-dark-600/50">
                      <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Eagles Club</p>
                        <p className="text-dark-300 text-sm">President</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expertise Tags */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 text-accent-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                      Heavy Equipment
                    </span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium border border-accent-500/30">
                      Business Strategy
                    </span>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                      Industry Leadership
                    </span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium border border-accent-500/30">
                      Operations Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Jenny Fernandez */}
            <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl p-8 text-center card-hover border border-dark-600/50 shadow-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-dark-900">JF</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Jenny Fernandez</h3>
              <p className="text-accent-400 font-medium mb-4">Vice President</p>
              <p className="text-dark-300 leading-relaxed mb-4">
                Strategic operations leader focused on client relationships and business development. Ensures EME maintains its reputation for excellence and reliability.
              </p>
              <div className="text-sm text-dark-400">
                <p>• Operations Management</p>
                <p>• Client Relations</p>
                <p>• Business Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}