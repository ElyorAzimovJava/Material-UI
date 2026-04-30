import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import {Avatar, IconButton, Typography} from "@mui/material";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import {makeStyles} from "@mui/styles";
import {blue, green, pink, yellow} from "@mui/material/colors";



function NoteCard({note, handleDelete}) {
    const getAvatarColor = (category) => {
        if (category === 'work') return yellow[700];
        if (category === 'money') return green[500];
        if (category === 'todos') return pink[500];
        return blue[500];
    };
    return(
        <>
            <Card elevation={1}>
                <CardHeader
                avatar={
                    <Avatar sx={{backgroundColor: getAvatarColor(note.category)}}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action = {
                    <IconButton onClick={()=> handleDelete(note.id)} >
                        <DeleteOutlined/>
                    </IconButton>
                }
                title = {note.title}
                subheader = {note.category}

                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>{note.details}</Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default NoteCard;