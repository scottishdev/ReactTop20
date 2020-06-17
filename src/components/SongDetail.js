import React, {Fragment} from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;
  return (
    <Fragment>
      <h3>Name: {props.song.title.label}</h3>

    </Fragment>
  )
}

export default SongDetail;
