import {makeStyles} from "@mui/styles";
import {Drawer, Typography} from "@mui/material";
const drawerWidth = 240;
const useStyles = makeStyles({
    page:{
        backgroundColor:'#f9f9f9 !important',
        width: '100% !important'
    },
    drawer:{
      width:drawerWidth,
    } ,
    paperDrawer:{
      width:drawerWidth,
    },
    root:{
        display:"flex",
    }
})
function Layout({children}) {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Drawer
             className={classes.drawer}
             variant="permanent"
             anchor='left'
             classes={{
                 paper: classes.paperDrawer,
             }}
            >
               <div>
                   <Typography variant="h5">
                       Ninja Notes
                   </Typography>
               </div>
            </Drawer>
           <div className={classes.page}>
               {children}
           </div>
        </div>
    );
}

export default Layout;