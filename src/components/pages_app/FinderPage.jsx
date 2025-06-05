import React, { useState } from 'react'

const FinderPage = ({ openApp }) => {
    const [currentFolder, setCurrentFolder] = useState('root')

    const folders = {
        root: [
            { name: 'Mon Ancien Portfolio', type: 'project', path: "https://thomas-bns.vercel.app" },
            { name: 'Projets', type: 'folder', folder: 'Projects' },
            { name: 'CV.pdf', type: 'file', path: "/public/pdf/CV.pdf" },
        ],
        Projects: [
            { name: 'Signe Et Moi', type: 'project', path: "https://signeetmoi.vercel.app" },
        ]
    }

    // Fonction pour retourner l’icône en fonction du type
    const getIcon = (type) => {
        switch (type) {
            case 'project':
                return '🚀'
            case 'folder':
                return '📁'
            case 'file':
                return '📄'
            default:
                return '❓'
        }
    }

    const handleClick = (file) => {
        if (file.type === 'folder') {
            setCurrentFolder(file.folder)
        } else if (file.type === 'project' || file.type === 'file') {
            openApp(file.name, (
                <iframe
                    src={file.path}
                    style={{ width: '100%', height: '100%' }}
                    className='border-none'
                    frameborder="0"
                />
            ), file.type === 'project')
        }
    }

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Mes fichiers</h2>

            {/* Bouton de retour */}
            {currentFolder !== 'root' && (
                <button
                    onClick={() => setCurrentFolder('root')}
                    className='flex items-center gap-2 text-left hover:underline border-[0.5px] rounded-[12px] p-1 pr-2 pl-2 mb-4'
                >
                    <span className='text-xl'>↩️</span>
                    <span className='cursor-pointer'>Retour</span>
                </button>
            )}

            {/* Grille des fichiers */}
            <div className="grid grid-cols-3 gap-5">
                {folders[currentFolder].map((file, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-3 cursor-pointer hover:bg-slate-700 p-1 rounded transition"
                        onClick={() => handleClick(file)}
                    >
                        <div className="text-5xl">{getIcon(file.type)}</div>
                        <div className="text-sm text-center mt-1">{file.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FinderPage