import { Posts, PostAction, PostActionTypes } from './postsTypes';

export default function posts(
    state: Posts = {
        byId: {},
        allIds: [],
        newPostId: 1
    },
    action: PostAction
): Posts {
    switch (action.type) {
        case PostActionTypes.ADD_POST:
            return {
                byId: {
                    ...state.byId,
                    [state.newPostId]: {
                        ...action.data,
                        id: state.newPostId
                    }
                },
                allIds: state.allIds.concat(state.newPostId),
                newPostId: state.newPostId + 1
            };
        case PostActionTypes.EDIT_POST:
            return state.allIds.includes(action.id)
                ? {
                      byId: {
                          ...state.byId,
                          [action.id]: { ...action.data }
                      },
                      allIds: state.allIds,
                      newPostId: state.newPostId
                  }
                : state;
        case PostActionTypes.DELETE_POST:
            if (!state.allIds.includes(action.id)) return state;

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [action.id]: _, ...newById } = state.byId;

            return {
                byId: newById,
                allIds: state.allIds.filter(i => i !== action.id),
                newPostId: state.newPostId
            };
        default:
            return state;
    }
}
