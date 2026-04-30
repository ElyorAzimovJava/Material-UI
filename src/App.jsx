import './App.css'
import {Routes, Route} from "react-router-dom";
import Notes from "./Notes.jsx";
import CreateNote from "./CreateNote.jsx";
import Layout from "./components/Layout.jsx";



function App() {
  return (
  <div >
      <Layout>
      <Routes>
              <Route element={<Notes/>} path='/notes'/>
              <Route element={<CreateNote/>} path='/create'/>

      </Routes>
      </Layout>

  </div>

  )
}

export default App
