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
                            className="w-7 h-7 text-gray-400 mr-3 flex-shrink-0"
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
                            placeholder="Recherche"
                            className="bg-transparent flex-grow outline-none text-gray-400 placeholder-gray-400 placeholder:font-medium"
                        />
                    </div>
                    <div className='h-18 w-18 bg-[#111725] rounded-2xl flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[50%] h-[50%] text-white group-hover:text-yellow-300 transition-colors"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage