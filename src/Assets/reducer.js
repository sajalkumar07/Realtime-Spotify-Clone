import { reducerCases } from "./constents";

export const initialState  = {
    token: null,
    playlists: [],
    userInfo : null,
    playlists: [],
    currentPlaying: null,
    platerState: false,
    selectedPlaylistId: '23K3adIToeG65Lb2NgBJ4L',
    selectedPlaylist: null,
}
const reducer = (state, action) =>{
    switch (action.type){
        case reducerCases.SET_TOKEN:{
            return{
                ...state, 
            token: action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return{
                ...state,
            playlists:  action.playlists,
            }
        }
        case reducerCases.SET_USER : {
            return{
                ...state,
            userInfo: action.userInfo
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return{
                ...state,
            selectedPlaylist: action.selectedPlaylist
            }
        }
        case reducerCases.SET_PLAYING:{
            return{
                ...state,
            currentPlaying: action.currentPlaying
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            return{
                ...state,
            platerState: action.platerState
            }
        }
        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
            selectedPlaylistId: action.selectedPlaylistId,
        };
        default:
            return state
    }
};
export default reducer;