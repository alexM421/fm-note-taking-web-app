import React from 'react'
import {Routes, Route} from "react-router-dom"

import Layout from "./components/Layout"
import Allnotes from './components/Allnotes'
import NoteContent from './components/NoteContent'
import Settings from './components/Settings'
import ColorTheme from './components/ColorTheme'
import FontTheme from './components/FontTheme'

import { NotesProvider } from './context/NotesContext'
import { ThemeProvider } from './context/ThemeContext'

import './App.css'
import ChangePassword from './components/ChangePassword'




export default function App() {

  document.body.classList.add("inter","lightMode")

  return (
    <ThemeProvider>
      <NotesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="notes" element={<Allnotes/>}>
              <Route path=":id" element={<NoteContent/>} />
            </Route>
            <Route path="settings" element={<Settings/>}>
              <Route path="colorTheme" element={<ColorTheme/>} />
              <Route path="fontTheme" element={<FontTheme/>} />
              <Route path="changePassword" element={<ChangePassword/>} />
            </Route>
          </Route>
        </Routes>
      </NotesProvider>
    </ThemeProvider>
  )
}


