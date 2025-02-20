import { useEffect, useRef, useState } from 'react'
import { Header } from "./components/header"
import { MainContent } from "./components/main-content"

import './App.css'

function App() {
  const [disabled, setDisabled] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("第一回 灵根育孕源流出 心性修持大道生")

  return (
    <>
    <div className="full-page">
      <Header setSelectedChapter={setSelectedChapter} />
      <main className="container">
        <MainContent selectedChapter={selectedChapter}/>
      </main>
    </div>
    </>
  )
}

export default App
