import {Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    title: {
        fontSize: '200px !important',
        color: 'red !important',
    }
})
function Create(){
    const classes = useStyles();
    return(
        <>
          {/*  <Typography
                variant={'h1'}
                color="primary"
                align={'center'}>
                Hello World!
            </Typography>*/}
         {/*   <Typography
                color="secondary"
            noWrap>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </Typography>*/}

            <Typography
            className={classes.title}
            variant='h3'
            color = 'textSecondary'
            gutterBottom
            component='h6'
            >
           Elyor Azimov
            </Typography>
        </>
    )
}
export default Create;