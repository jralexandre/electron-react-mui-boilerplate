import {
    Posts,
    PostAction,
    ADD_POST,
    EDIT_POST,
    AddPostAction,
    EditPostAction,
    DELETE_POST,
    DeletePostAction
} from './postsTypes';

const addPost = (state: Posts, action: AddPostAction): Posts => ({
    byId: {
        ...state.byId,
        [state.newPostId]: {
            ...(action as AddPostAction).data,
            id: state.newPostId
        }
    },
    allIds: state.allIds.concat(state.newPostId),
    newPostId: state.newPostId + 1
});

const editPost = (state: Posts, action: EditPostAction): Posts =>
    state.allIds.includes(action.id)
        ? {
              byId: {
                  ...state.byId,
                  [action.id]: { ...action.data }
              },
              allIds: state.allIds,
              newPostId: state.newPostId
          }
        : state;

const deletePost = (state: Posts, action: DeletePostAction): Posts => {
    if (!state.allIds.includes((action as DeletePostAction).id)) return state;

    const newById = state.byId;
    delete newById[(action as DeletePostAction).id];

    return {
        byId: newById,
        allIds: state.allIds.filter(i => i !== (action as DeletePostAction).id),
        newPostId: state.newPostId
    };
};

export default function posts(
    state: Posts = {
        byId: {},
        allIds: [],
        newPostId: 1
    },
    action: PostAction
): Posts {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action as AddPostAction);
        case EDIT_POST:
            return editPost(state, action as EditPostAction);
        case DELETE_POST:
            return deletePost(state, action as DeletePostAction);
        default:
            return state;
    }
}
