import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';


export default function HomePage() {
    const dispatch = useDispatch();
    const openCreatePostModal = useCallback(() => {
        dispatch(showModal())
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab 
                color='primary'
                sx={{
                    position: 'fixed',
                    bottom: (theme) => theme.spacing(8),
                    right: (theme) => theme.spacing(8)
                }}
                onClick={openCreatePostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    )
}