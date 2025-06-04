import React from 'react'

import Topbar from './components/topbar'
import Dock from './components/Dock'
import Desktop from './components/Desktop'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-black text-white'>
      <Topbar />

      {/* <Dock /> */}

      <Desktop />

    </div>
  )
}

export default App