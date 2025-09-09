'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Truck, Settings, Users } from 'lucide-react'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  
  useEffect(() => {
    if (videoRef.current) {
      // スローモーション効果: 0.3倍速で再生（より遅く）
      videoRef.current.playbackRate = 0.3
      
      // 動画の読み込み完了ハンドリング
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
      })
      
      // 動画の読み込みエラーハンドリング
      videoRef.current.addEventListener('error', () => {
        console.log('Video failed to load, using fallback background')
        setVideoLoaded(true) // エラーでもローディングを終了
      })
      
      // モバイルデバイスでは動画を一時停止（パフォーマンス向上）
      if (window.innerWidth < 768) {
        videoRef.current.pause()
      }
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover slow-motion"
          style={{ 
            filter: 'brightness(0.3) contrast(1.2) saturate(0.7)',
            transform: 'scale(1.1)'
          }}
        >
          {/* メイン重機動画（最適化版） */}
          <source src="/videos/hero-heavy-equipment.mp4" type="video/mp4" />
          
          {/* フォールバック動画 */}
          <source src="/videos/4438602483756937926.MP4" type="video/mp4" />
          <source src="/videos/heavy-equipment-bg.mp4" type="video/mp4" />
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
          
          {/* 動画が読み込めない場合のフォールバック背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/70 to-dark-900/80"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Truck className="h-5 w-5 text-primary-400 mr-2" />
            <span className="text-primary-300 font-medium">Heavy Equipment Specialists</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title mb-8 animate-slide-up">
            <span className="text-white">Professional</span>
            <br />
            <span className="text-gradient">Heavy Equipment</span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We are providing high quality aggregates and merchandising trucks and heavy equipment parts. 
            Quality equipment at affordable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              Our Services
              <Play className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Settings className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-dark-300">Equipment Units</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Users className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
              <p className="text-dark-300">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary-500/10 rounded-lg inline-block mb-4">
                <Truck className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-dark-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-accent-500/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-primary-500/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero
