import React, { useState, useRef } from 'react'

const Window = ({ title, children, onClose, onClick, initialPos, zIndex }) => {
  const [pos, setPos] = useState(initialPos || { x: 100, y: 100 })
  const [isMaximized, setIsMaximized] = useState(false)
  const dragStart = useRef(null)

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

  const onDrag = (e) => {
    const newX = e.clientX - dragStart.current.x
    const newY = e.clientY - dragStart.current.y
    setPos({ x: newX, y: newY })
  }

  const onDragEnd = () => {
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', onDragEnd)
  }

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  return (
    // ATTENTION : onClick ici sur le conteneur principal pour gérer le bringToFront au clic n'importe où sur la fenêtre
    <div
      className="absolute bg-gray-800 bg-opacity-90 border border-gray-600 rounded-lg shadow-lg w-96 h-64"
      style={{ left: pos.x, top: pos.y, zIndex: zIndex }}
      onClick={onClick}  // <-- important ici !
    >
      {/* Barre de titre, draggable */}
      <div
        className="bg-gray-700 px-3 py-1 rounded-t-lg font-semibold text-white select-none cursor-move flex justify-between items-center"
        onMouseDown={onDragStart}
      >
        <span>{title}</span>
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

      {/* Contenu */}
      <div className="mt-2 text-white p-2">{children}</div>
    </div>
  )
}

export default Window
