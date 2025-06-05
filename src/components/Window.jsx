import React, { useState, useRef } from 'react'
import { TOP_BAR_HEIGHT } from '../utils/constants'


const PHONE_SIZE = { width: 410, height: 790 }

const Window = ({ title, children, onClose, onClick, initialPos, zIndex, isProject, disableMaximize }) => {
  const [pos, setPos] = useState(initialPos || { x: 100, y: 100 })
  const [isMaximized, setIsMaximized] = useState(false)
  const dragStart = useRef(null)

  const [size, setSize] = useState(isProject ? PHONE_SIZE : { width: 494, height: 356 })

  const onDragStart = (e) => {
    if (isMaximized) return
    e.preventDefault()
    dragStart.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    }
    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', onDragEnd)
  }

  // const TOP_BAR_HEIGHT = 48

  const onDrag = (e) => {
    let newX = e.clientX - dragStart.current.x
    let newY = e.clientY - dragStart.current.y

    if (newX < 0) newX = 0
    if (newY < TOP_BAR_HEIGHT) newY = TOP_BAR_HEIGHT

    setPos({ x: newX, y: newY })
  }

  const onDragEnd = () => {
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', onDragEnd)
  }

  const toggleMaximize = () => {
    if (disableMaximize) return
    if (isMaximized) {
      setSize(isProject ? PHONE_SIZE : { width: 384, height: 256 })
      setPos({ x: 100, y: 100 })
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight - 48 })
      setPos({ x: 0, y: 48 })
    }
    setIsMaximized(!isMaximized)
  }

  return (
    // ATTENTION : onClick ici sur le conteneur principal pour gérer le bringToFront au clic n'importe où sur la fenêtre
    <div
      className="absolute bg-gray-800 bg-opacity-90 border border-gray-600 rounded-lg shadow-lg w-96 h-64 flex flex-col"
      style={{
        // left: isMaximized ? 0 : pos.x,
        // top: isMaximized ? '3rem' : pos.y,
        // width: isMaximized ? '100%' : '34rem',  // 24rem = w-96
        // height: isMaximized ? '100%' : '24rem', // 16rem = h-64
        left: pos.x,
        top: pos.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}

      onClick={onClick}  // <-- important ici !
    >
      {/* Barre de titre, draggable */}
      <div
        className="bg-gray-700 px-3 py-1 rounded-t-lg font-semibold text-white select-none cursor-move flex justify-between items-center"
        onMouseDown={onDragStart}
      >
        <span>{title}</span>

        <div className="flex space-x-1">
          {!disableMaximize && (
            <button
              onClick={(e) => {
                // e.stopPropagation() // empêche le click de remonter et trigger bringToFront
                toggleMaximize()
              }}
              className="text-white font-bold px-2 hover:text-green-400"
            >
              {isMaximized ? '🗗' : '⬜'}
            </button>

          )}

          <button
            onClick={(e) => {
              // e.stopPropagation() // empêche le click de remonter et trigger bringToFront
              onClose()
            }}
            className="text-white font-bold px-2 hover:text-red-500"
          >
            X
          </button>
        </div>
      </div>

      {/* Contenu */}
      <div className="mt-2 text-white p-2 h-[calc(100%-3rem-1rem)] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Window
