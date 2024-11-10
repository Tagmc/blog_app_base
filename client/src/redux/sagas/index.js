import { call, put, take, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../apis'


//function process when actions happen
function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts); //yield nhu async await
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostFailure(error));
    }
}
function* createPostSaga(action) {
    try {
        const posts = yield call(api.createPost, action.payload); //yield nhu async await
        yield put(actions.createPost.createPostSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const posts = yield call(api.updatePost, action.payload); //yield nhu async await
        yield put(actions.updatePost.updatePostSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.updatePost.updatePostFailure(error));
    }
}


function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga); //takeLatest mean UI have many actions, final action is processed data and all sagas processed actions before have been working will be canceled
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;