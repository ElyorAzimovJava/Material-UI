import {Button, ButtonGroup, Container} from "@mui/material";
function ButtonComponent(){
    return (

        <Container>
            <Button
                onClick={() => alert('Button has been clicked')}
                type='submit'
                color='success'
                size='medium'
                variant='outlined'
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