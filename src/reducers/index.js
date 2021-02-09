import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:04",
    },
    {
      title: "Money",
      duration: "6:12",
    },
    {
      title: "Comfortably Numb",
      duration: "5:33",
    },
    {
      title: "Sweet child of mine",
      duration: "3:54",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
