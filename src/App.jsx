import './App.css'
import Create from "./Create.jsx";
import ButtonComponent from "./ButtonComponent.jsx";
import Icon from "./Icon.jsx";
// import {createTheme, ThemeProvider} from "@mui/material";
import {purple} from "@mui/material/colors";
import InputComponent from "./InputComponents.jsx";
import RadioComponent from "./RadioComponent.jsx";
import {Routes, Route} from "react-router-dom";
import Notes from "./Notes.jsx";
/*
const theme = createTheme({
    palette: {
        primary:{
            main: '#fefefe'
        },
        secondary: purple,
        typography:{
            fontFamily: 'Quicksand',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,
        }
    }
})*/


function App() {
  return (
  <div >
     <Create/>
     <ButtonComponent/>
     <Icon/>
     <InputComponent/>
     <RadioComponent/>
      <Routes>
          <Route element={<Notes/>} path='/notes'/>
      </Routes>
  </div>

  )
}

export default App
