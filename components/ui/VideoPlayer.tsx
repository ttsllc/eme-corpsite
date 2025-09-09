'use client'

import { useRef, useState, useEffect } from 'react'

interface VideoPlayerProps {
  sources: { src: string; type: string }[]
  poster?: string
  className?: string
  muted?: boolean
  controls?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  fallbackContent?: React.ReactNode
  cropVertical?: boolean
}

const VideoPlayer = ({ 
  sources, 
  poster, 
  className = '', 
  muted = true, 
  controls = true,
  preload = 'metadata',
  fallbackContent,
  cropVertical = false
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadStart = () => {
      console.log('Video load started')
      setIsLoading(true)
      setHasError(false)
    }

    const handleCanPlay = () => {
      console.log('Video can play')
      setIsLoading(false)
    }

    const handleLoadedData = () => {
      console.log('Video data loaded')
      setIsLoading(false)
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      console.error('Video error code:', video.error?.code)
      console.error('Video error message:', video.error?.message)
      setHasError(true)
      setIsLoading(false)
    }

    const handlePlay = () => {
      console.log('Video started playing')
      setIsPlaying(true)
    }

    const handlePause = () => {
      console.log('Video paused')
      setIsPlaying(false)
    }

    // 動画の情報をログ出力
    setTimeout(() => {
      console.log('Video readyState:', video.readyState)
      console.log('Video networkState:', video.networkState)
      console.log('Video currentSrc:', video.currentSrc)
    }, 1000)

    // イベントリスナーを追加
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      // クリーンアップ
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const handlePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().catch(console.error)
    } else {
      video.pause()
    }
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full"
        controls={controls}
        muted={muted}
        preload={preload}
        poster={poster}
        style={{ 
          zIndex: 1,
          objectFit: 'contain',
          objectPosition: 'center center',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
      >
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        
        {/* Fallback content */}
        {fallbackContent || (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-dark-900">📹</span>
              </div>
              <p className="text-white mb-2">Video Preview</p>
              <p className="text-sm text-dark-400">Your browser doesn't support video playback</p>
            </div>
          </div>
        )}
      </video>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-900/50 z-10">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-900/80 z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-white mb-2">Video Error</p>
            <p className="text-sm text-dark-400">Failed to load video</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Custom play button overlay (only when video is not using browser controls) */}
      {!controls && !isPlaying && !isLoading && !hasError && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-dark-900/30 hover:bg-dark-900/50 transition-colors z-20"
        >
          <div className="w-16 h-16 bg-primary-500/90 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

export default VideoPlayer
