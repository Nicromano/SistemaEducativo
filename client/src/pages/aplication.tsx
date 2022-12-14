import Navbar from '../components/header/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Aplication = () => {
  document.body.classList.add('bg-slate-50')
  return (
    <>
      <Navbar />
      <div className="container min-h-screen max-w-[1366px] mx-auto lg:px-0 px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Aplication
