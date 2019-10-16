import {
    PostAction,
    ADD_POST,
    AddPostAction,
    EDIT_POST,
    EditPostAction,
    DELETE_POST
} from '../actions/posts';

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface Posts {
    byId: {
        [id: number]: Post;
    };
    allIds: number[];
    newPostId: number;
}

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
            const newId = state.newPostId;
            return {
                byId: {
                    ...state.byId,
                    [newId]: {
                        ...(action as AddPostAction).data,
                        id: newId
                    }
                },
                allIds: state.allIds.concat(newId),
                newPostId: newId + 1
            };
        case EDIT_POST:
            const ac = action as EditPostAction;
            if (!state.allIds.includes(ac.id)) return state;

            return {
                byId: {
                    ...state.byId,
                    [ac.id]: { ...ac.data }
                },
                allIds: state.allIds,
                newPostId: state.newPostId
            };
        case DELETE_POST:
            if (!state.allIds.includes(action.id)) return state;

            const newById = state.byId;
            delete newById[action.id];

            return {
                byId: newById,
                allIds: state.allIds.filter(i => i !== action.id),
                newPostId: state.newPostId
            };
        default:
            return state;
    }
}
