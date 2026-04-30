import {makeStyles} from "@mui/styles";
import {Drawer, ListItem, ListItemText, Typography, List, ListItemIcon} from "@mui/material";
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useLocation, useNavigate} from 'react-router-dom';
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
    },
    active :{
        backgroundColor: '#f4f4f4'
    }
})
function Layout({children}) {
    const menuItems = [
        {
            text: "My Notes",
            icon : <SubjectOutlinedIcon color='secondary'/>,
            path: '/notes'
        },
        {
            text: "Create Notes",
            icon:<AddCircleOutlineOutlinedIcon color='secondary'/>,
            path: '/create'
        }
    ]
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
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

                <List>
                    {menuItems.map(item => (
                       <ListItem key={item.text} button
                       onClick={() => navigate(item.path)}
                       className={location.pathname === item.path ? classes.active : null}
                       >
                           <ListItemIcon>{item.icon}</ListItemIcon>
                           <ListItemText primary={item.text} />
                       </ListItem>
                    ))}
                </List>
            </Drawer>
           <div className={classes.page}>
               {children}
           </div>
        </div>
    );
}

export default Layout;