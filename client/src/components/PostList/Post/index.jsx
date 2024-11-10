import {
    Card,
    CardActions,
    CardHeader,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Avatar
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";
const Post = ({post}) => {
    const dispatch = useDispatch()
    const onLikeClick = useCallback(() => {
        dispatch(updatePost.updatePostRequest({...post, likeCount: post.likeCount + 1}))
    }, [dispatch, post]);

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="Title" style={{height: '150px'}} />
            <CardContent>
                <Typography variant="h5" color="textPrimary">{post.title}</Typography>
                <Typography variant="body2" component={"p"} color="textSecondary">{post.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikeClick}>
                    <FavoriteIcon />
                    <Typography component={"span"} color="textSecondary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post;