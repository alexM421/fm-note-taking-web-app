import React from 'react'
import {Routes, Route} from "react-router-dom"

import Layout from "./components/Layout"
import Allnotes from './components/Allnotes'
import NoteContent from './components/NoteContent'


import './App.css'



export default function App() {

  document.body.classList.add("inter","lightMode")

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="notes" element={<Allnotes/>}>
          <Route path=":id" element={<NoteContent/>} />
        </Route>
      </Route>
    </Routes>
  )
}


