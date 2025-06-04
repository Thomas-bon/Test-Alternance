import React from 'react'

const Topbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-10 bg-gray-900 bg-opacity-80 text-white flex items-center px-4 select-none z-50">
            <div className="font-semibold">🍎 MyOS</div>
            <div className="flex-grow"></div>
            <div className="space-x-4">
                <span>WiFi</span>
                <span>Battery</span>
                <span>Time</span>
            </div>
        </div>
    )
}

export default Topbar