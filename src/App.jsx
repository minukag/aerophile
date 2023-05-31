import { useState } from 'react'
import './App.scss'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
