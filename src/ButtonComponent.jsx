import {Button, ButtonGroup, Container} from "@mui/material";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SendIcon from '@mui/icons-material/Send';
function ButtonComponent(){
    return (

        <Container>
            <Button
                onClick={() => alert('Button has been clicked')}
                type='submit'
                color='success'
                size='medium'
                variant='outlined'
                startIcon={<SportsSoccerIcon/>}
                endIcon={<SendIcon/>}
            >Submit</Button>
            <Button type='submit' color='secondary' variant='outlined'>Submit</Button>

            <ButtonGroup color='secondary' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Container>
    )
}
export default ButtonComponent;