import {Button, Container, FormControl, FormControlLabel, FormLabel, RadioGroup,Radio, Typography} from "@mui/material";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    field: {
        marginTop: "20px !important",
    },
    btn:{
        marginTop: "20px !important",
        fontSize: "30px !important",
    },
    formControl: {
        marginTop: "20px !important",
        marginBottom: "20px !important",
        display: "block !important",
    }
})
function CreateNote() {
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [details,setDetails] = useState("");
    const [category, setCategory] = useState("todos");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = async (e) =>{
          e.preventDefault();
          setTitleError(false);
          setDetailsError(false);

          if(titleError === ''){
              setTitleError(true);
          }
          if(detailsError === ''){
              setTitleError(true);
          }

          if(title && details){
              const res =await fetch("http://localhost:8000/notes", {
                  method: "POST",
                  headers: {
                      contentType: "application/json",
                  },
                  body: JSON.stringify({title, details, category}),
              })
              if(res.status === 201){
                  alert("Successfully created");
                  useNavigate("/")
              }
          }
    }
    return (
        <Container>
            <Typography variant='h3' component='h1' color='textDisabled'>Create Note</Typography>

            {/*Inputs*/}
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
               <TextField
               className={classes.field}
               onChange={(e) => setTitle(e.target.value)}
               variant='outlined'
               label='Title'
               color='secondary'
               fullWidth
               required
               error={titleError}
               />
                <TextField
                 className={classes.field}
                 onChange={(e) => setDetails(e.target.value)}
                 variant='outlined'
                 label='Details'
                 color='secondary'
                 multiline
                 rows={4}
                 fullWidth
                 error={detailsError}
                />
                {/* Radio */}
                <FormControl  className={classes.formControl} fullWidth>
                    <FormLabel>
                        Category
                    </FormLabel>
                    <RadioGroup value={category} color='secondary' onChange={(e) => setCategory(e.target.value)}    >
                        <FormControlLabel value='money' control={<Radio/>} label='Money'/>
                        <FormControlLabel value='todos' control={<Radio/>} label='Todos'/>
                        <FormControlLabel value='remainders' control={<Radio/>} label='Remainders'/>
                        <FormControlLabel value='work' control={<Radio/>} label='Work'/>
                    </RadioGroup>
                </FormControl>

                {/*Button*/}
                <Button
                    className={classes.btn}
                    type='submit'
                    color='secondary'
                    variant='contained'
                >Submit</Button>
            </form>
        </Container>
    )
}
export default CreateNote;