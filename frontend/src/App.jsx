import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./styles/styles.scss"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
