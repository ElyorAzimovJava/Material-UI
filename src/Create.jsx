import {Typography} from "@mui/material";

function Create(){
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