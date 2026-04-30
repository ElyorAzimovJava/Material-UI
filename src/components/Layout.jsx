import {makeStyles} from "@mui/styles";
import {Drawer, ListItem, ListItemText, Typography, List, ListItemIcon, AppBar, Toolbar, Avatar} from "@mui/material";
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useLocation, useNavigate} from 'react-router-dom';
import {format} from 'date-fns';
const drawerWidth = 240;
const useStyles = makeStyles((theme)=>{
   return {
       page: {
           backgroundColor: '#f9f9f9 !important',
           width: '100% !important',
       },
       drawer: {
           width: drawerWidth,
       },
       paperDrawer: {
           width: drawerWidth,
       },
       root: {
           display: "flex",
       },
       active: {
           backgroundColor: '#f4f4f4'
       },
       appBar: {
           width: `calc(100% - ${drawerWidth}px) !important`,
       },
       toolBar: {
           height: `calc(100% - ${drawerWidth}px) !important`,
       },
       date: {
           flexGrow: 1,
       },
       avatar: {
           marginLeft: '16px !important'
       }
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
            <AppBar className={classes.appBar} elevation={0}>
              <Toolbar>
                  <Typography className={classes.date}>
                     Today is the  {format(new Date(), 'do MMMM Y')}
                  </Typography>
                  <Typography>
                      Elyor
                  </Typography>
                  <Avatar src='/programmerpng.png' className={classes.avatar} />
              </Toolbar>
            </AppBar>
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
               <div className={classes.toolBar}></div>
               {children}
           </div>
        </div>
    );
}

export default Layout;