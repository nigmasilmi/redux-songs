import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ theSelectedSong }) => {
  if (!theSelectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {theSelectedSong.title}
        <br />
        Duration: {theSelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { theSelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
