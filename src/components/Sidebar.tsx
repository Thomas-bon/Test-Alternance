import React from 'react'

const SideBar = () => {
  
    return (
    <div className="h-full flex flex-col justify-between items-center py-8 ">
        
        <div className="w-10 h-10 bg-red-600 mt-8 cursor-pointer"></div>

      {/* Carrés bleus au centre */}
      <div className="flex flex-col items-center gap-15">
        <div className="w-10 h-10 bg-blue-500 cursor-pointer"></div>
        <div className="w-10 h-10 bg-blue-500 cursor-pointer"></div>
        <div className="w-10 h-10 bg-blue-500 cursor-pointer"></div>
        <div className="w-10 h-10 bg-blue-500 cursor-pointer"></div>
      </div>

      {/* Carré jaune en bas */}
      <div className="w-10 h-10 bg-yellow-400 mb-8 cursor-pointer"></div>

    </div>
  )
}

export default SideBar