import React from 'react'

const Dock = ({ onOpenApp }) => {
    const apps = [
        { name: "Finder", emoji: "🗂️" },
        { name: "Browser", emoji: "🌐" },
        { name: "Editor", emoji: "✍️" },
        { name: "Terminal", emoji: "🖥️" },
    ]


    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex space-x-6 bg-gray-900 bg-opacity-80 rounded-t-3xl p-3">
            {apps.map(app => (
                <button
                    key={app.name}
                    className='text-3xl hover:scale-110 transition-transform'
                    title={app.name}
                    aria-label={app.name}
                    onClick={() => onOpenApp(app.name)}
                >
                    {app.emoji}
                </button>


            ))}
        </div>
    )
}

export default Dock