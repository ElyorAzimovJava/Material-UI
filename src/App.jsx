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
import CreateNote from "./CreateNote.jsx";
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import {makeStyles} from "@mui/styles";
import {Container} from "@mui/material";
import Layout from "./components/Layout.jsx";
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

const useStyles = makeStyles({
   grid: {
       marginTop: "10px !important",
       marginBottom: "30px !important",

   },
   link: {
       fontSize: "20px !important",
       textDecoration: "none !important",
   }
})
function App() {
    const classes = useStyles();
  return (
  <div >
{/*<Container>
    <Grid container spacing={2} className={classes.grid}>
        <Grid item size={{xs: 12,md:6,lg:4}}>
            <Link className={classes.link}
                variant={'body1'}
                color={'secondary'}
                href={'/notes'}
            >All Notes
            </Link>
        </Grid>
        <Grid item size={{xs: 12,md:6,lg:4}}>
            <Link
                className={classes.link}
                variant={'body1'}
                color={'secondary'}
                href={'/create'}
            >Create
            </Link>
        </Grid>
    </Grid>
</Container>*/}
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
