import React, {Fragment} from 'react';

const SongList = (props) => {
  if (!props.songs) return null

  const songList = props.songs.map((song) => {
    return <option  value={song.id.attributes['im:id']}
                    key={song.id.attributes['im:id']}>
                    {song.title.label}
                    </option>
  });

  function handleChange(event) {
    props.onSongSelect(event.target.value)
  }

  return (
    <Fragment>
    <select id="music-list" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Select a song</option>
      {songList}
    </select>
    </Fragment>
  )
}

export default SongList;
