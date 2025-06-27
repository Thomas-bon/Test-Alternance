import React, { useState } from 'react'

const DashboardPage = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {
        alert(`La recherche est : ${searchTerm}`)
    }

    const handleKeyEnterDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className=' w-full h-full p-10 pl-15'>
            <div className='bg-yellow-300 w-full h-60 p-0 flex justify-between'>
                <div className=''><p className='text-6xl font-semibold text-[#111725]'>Envoyer un Colis</p></div>
                <div className='flex gap-5'>
                    <div className='h-18 w-60 bg-white rounded-2xl border-2 border-gray-200 drop-shadow-sm flex items-center px-4'>
                        <svg
                            className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-1.35z"></path>
                        </svg>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyEnterDown}
                            placeholder="Recherche..."
                            className="bg-transparent flex-grow outline-none text-gray-400 placeholder-gray-400"
                        />
                    </div>
                    <div className='h-18 w-18 bg-[#111725] rounded-2xl'></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage