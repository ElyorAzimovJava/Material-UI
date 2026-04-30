import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    page:{
        backgroundColor:'#f9f9f9 !important',
        width: '100% !important'
    }
})
function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
           <div className={classes.page}>
               {children}
           </div>
        </div>
    );
}

export default Layout;