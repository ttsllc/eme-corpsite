'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface BGMPlayerProps {
  src: string
  className?: string
}

const BGMPlayer = ({ src, className = '' }: BGMPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3) // 初期音量30%

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // 音量設定
    audio.volume = volume
    audio.loop = true // ループ再生

    // イベントリスナー
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(error => {
        console.log('Audio play failed:', error)
      })
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    const newMuted = !isMuted
    audio.muted = newMuted
    setIsMuted(newMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    
    const audio = audioRef.current
    if (audio) {
      audio.volume = newVolume
    }
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className="bg-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-4 shadow-2xl">
        <div className="flex items-center space-x-3">
          {/* プレイ/ストップボタン */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-primary-500 hover:bg-primary-400 rounded-full flex items-center justify-center text-white transition-colors group"
            aria-label={isPlaying ? 'Pause BGM' : 'Play BGM'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 ml-0.5 group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* 音量コントロール */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="w-8 h-8 text-dark-300 hover:text-white transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-dark-600 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500 
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
            />
          </div>

          {/* BGMラベル */}
          <div className="text-xs text-dark-300 max-w-32">
            <div className="font-medium text-white text-sm">GHOST</div>
            <div className="text-xs opacity-75">by Paul Fernandez</div>
          </div>
        </div>
      </div>

      {/* オーディオ要素 */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
      />
    </div>
  )
}

export default BGMPlayer
