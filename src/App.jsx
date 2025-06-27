import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import SignInPage from './pages/SignIn'
import DashboardPage from './pages/DashBoard'



const AppContent = () => {
  const location = useLocation()
  const hideSidebar = location.pathname === '/SignIn'

  return (
    <div className="flex h-screen">
      {!hideSidebar && (
        <div className="w-[5%] h-full bg-[#111725] text-white">
          <Sidebar />
        </div>
      )}
      <div className={`${hideSidebar ? 'w-full' : 'w-[95%]'} h-full p-4 overflow-auto bg-[#f0f4f7]`}>
        <Routes>
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          {/* autres routes */}
        </Routes>
      </div>
    </div>
  )
}


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}


export default App