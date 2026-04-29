import {Button, ButtonGroup, Container} from "@mui/material";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn:{
        fontSize: 100,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue',
        }
    }

})
function ButtonComponent(){
    const classes = useStyles();
    return (

        <Container>
            <Button
                className={classes.btn}
                onClick={() => alert('Button has been clicked')}
                type='submit'
                color='success'
                size='medium'
                variant='outlined'
                startIcon={<SportsSoccerIcon/>}
                endIcon={<SendIcon/>}
            >Submit</Button>
            <Button type='submit' color='secondary' variant='outlined'>Submit</Button>

            <ButtonGroup color='primary' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Container>
    )
}
export default ButtonComponent;