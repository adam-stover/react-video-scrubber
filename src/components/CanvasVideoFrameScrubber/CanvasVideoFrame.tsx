import React, { useEffect, useRef } from 'react'

interface CanvasVideoFrameProps {
  videoSrc: string,
  currentTime: number,
  width: number,
  height: number
}

const CanvasVideoFrame: React.FC<CanvasVideoFrameProps> = ({ 
  videoSrc,
  currentTime, 
  width, 
  height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    console.log(`in CanvasVideoFrame with currentTime: ${currentTime}`)

    useEffect(() => {
      if (canvasRef.current !== null) {
        const ctx = canvasRef.current.getContext('2d')
        const videoElement = document.createElement('video')
        videoElement.src = videoSrc;
        videoElement.currentTime = currentTime
        videoElement.onseeked = (event) => {
          console.log(`onseeked`)
          ctx?.drawImage(videoElement, 0, 0)
        } 
    }
    }, [])

    return (
      <>
        <canvas 
          ref={canvasRef}
          width={width}
          height={height}/>
      </>
    )
}

export default CanvasVideoFrame