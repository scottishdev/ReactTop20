import React, {Fragment} from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;
  return (
    <Fragment>
      <h3>{props.song['im:name'].label}</h3>
      <p>Artist: {props.song['im:artist'].label}</p>
      <img src={props.song['im:image'][1].label} alt=""/>

    </Fragment>
  )
}

export default SongDetail;
