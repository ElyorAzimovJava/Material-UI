import TextField from '@mui/material/TextField';
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {Button} from "@mui/material";
const useStyles = makeStyles({
    field: {
        marginTop: '20px !important',
        marginBottom: '20px !important',
        display: 'block !important',
    }
})
function InputComponent() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        if(name === '') setNameError(true);
        if(email === '') setEmailError(true);
        if(name && email) {
            alert(name + ' ' + email);
        }
    }
    return(
        <>
            <form noValidate autoComplete="off" onSubmit = {handleSubmit}>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                className={classes.field}
              label='Name'
              variant='outlined'
              color='secondary'
              fullWidth
              required
              error={nameError}

            />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.field}
                    label='Email'
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={emailError}

                />
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>


        </>
    )
}
export default InputComponent;