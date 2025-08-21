import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import {Routes, Route } from "react-router-dom";
import HomePage from './component/Home_Page/Home'
import CategoryPage from './component/Category_Pages/CategoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
    </>
  )
}

export default App

