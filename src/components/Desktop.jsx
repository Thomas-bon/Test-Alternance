import { useState } from 'react'
import Dock from './Dock'
import Window from './Window'
import NotePage from './pages_app/NotePage'
import CodePage from './pages_app/CodePage'
import TerminalPage from './pages_app/TerminalPage'
import FinderPage from './pages_app/FinderPage'

// Liste des apps du bureau
const desktopApps = [
    { name: "Code", icon: "💻" },
    { name: "Notes", icon: "📝" },
    { name: "Terminal", icon: "🖥️" }
]

const IframeSignEtMoi = () => (
    <iframe 
    src="https://google.com" 
    style={{}}
    frameborder="0"
    />
)

const getAppContents = (openApp) => ({
    Notes: <NotePage />,
    Code: <CodePage />,
    Terminal: <TerminalPage />,
    SignEtMoi: <IframeSignEtMoi />,
    Finder: <FinderPage openApp={openApp} />
})

const Desktop = () => {
    // Liste des fenêtres ouvertes (objet avec nom, position et zIndex)
    const [openWindows, setOpenWindows] = useState([])

    // Ouvre une app si elle n'est pas déjà ouverte, position aléatoire et zIndex basé sur timestamp
    const openApp = (appName, content = null, isProject = false) => {
        setOpenWindows((prev) => {
            if (prev.find(win => win.name === appName)) return prev // déjà ouverte

            // Position aléatoire (tu peux adapter les valeurs pour tenir compte de la taille écran)
            const randomX = Math.floor(Math.random() * (window.innerWidth - 400))
            const randomY = Math.floor(Math.random() * (window.innerHeight - 300))

            return [
                ...prev,
                {
                    name: appName,
                    zIndex: 3,
                    position: { x: randomX, y: randomY },
                    content,
                    isProject
                }
            ]
        })
    }

    // Ferme une fenêtre donnée (filtre de la liste)
    const closeApp = (name) => {
        setOpenWindows((prev) => prev.filter(win => win.name !== name))
    }

    // Met une fenêtre devant en mettant son zIndex au timestamp actuel
    // les autres restent avec leur zIndex inchangé (tu peux aussi les baisser si tu veux)
    const bringToFront = (name) => {
        setOpenWindows((prev) =>
            prev.map(win =>
                win.name === name
                    ? { ...win, zIndex: 3 }  // Fenêtre cliquée devant
                    : { ...win, zIndex: 2 }  // Toutes les autres derrière
            )
        )
    }


    return (
        <div className="relative flex-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 pt-12">

            {/* Icônes du bureau */}
            <div className='grid grid-cols-4 gap-4'>
                {desktopApps.map((app) => (
                    <button
                        key={app.name}
                        className='flex flex-col items-center hover:scale-105 transition-transform'
                        onClick={() => openApp(app.name)}
                    >
                        <span className='text-4xl'>{app.icon}</span>
                        <span className='text-sm mt-1'>{app.name}</span>
                    </button>
                ))}
            </div>

            {/* Toutes les fenêtres ouvertes */}
            {openWindows.map((win) => (
                <Window
                    key={win.name}
                    title={win.name}
                    initialPos={win.position}
                    zIndex={win.zIndex}
                    onClick={() => bringToFront(win.name)}
                    onClose={() => closeApp(win.name)}
                    isProject={win.isProject}
                >
                    {/* {appContents[win.name]} */}
                    {win.content ?? getAppContents(openApp)[win.name]}
                </Window>
            ))}

            {/* Dock, qui peut aussi ouvrir des apps */}
            <Dock onOpenApp={openApp} />
        </div>
    )
}

export default Desktop
