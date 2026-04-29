import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    field: {
        marginTop: '20px !important',
        marginBottom: '20px !important',
        marginLeft: '20px !important',
        display: 'block !important',
    }
})
function RadioComponent(){
    const classes = useStyles();
    const [category, setCategory] = useState('todos');
    return(
        <>
            <FormControl className={classes.field}>
            <FormLabel>
                Note Category
            </FormLabel>
            <RadioGroup value={category} color={'secondary'} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value={'money'} control={<Radio/>} label={'Money'}/>
                <FormControlLabel value={'todos'} control={<Radio/>} label={'Todos'}/>
                <FormControlLabel value={'remainders'} control={<Radio/>} label={'Remainders'}/>
                <FormControlLabel value={'work'} control={<Radio/>} label={'Work'}/>
            </RadioGroup>
            </FormControl>

        </>
    )
}
export default RadioComponent;