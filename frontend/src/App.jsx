import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import SplashCursor from './components/SplashCursor'

function App() {
  return (
    <>
      <div className="aurora-bg" aria-hidden="true" />
      <SplashCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
