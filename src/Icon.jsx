import {Container} from "@mui/material";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
function Icon (){
    return(
        <Container>
            <SportsSoccerIcon color='secondary'  fontSize = 'large'/>
            <SportsSoccerIcon color='primary'  fontSize = 'small'/>
            <SportsSoccerIcon color='action'  fontSize = 'small'/>
            <SportsSoccerIcon color='error'  fontSize = 'small'/>
            <SportsSoccerIcon />

        </Container>
    )
}
export default Icon;