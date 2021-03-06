import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: [],
      selectedSongID: ""
    };

    this.handleSongSelect = this.handleSongSelect.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songList: songs.feed.entry}))
    .catch(err => console.error);
  }

  handleSongSelect(songID){
    this.setState({selectedSongID: songID});
  }

  render(){
    const selectedSong = this.state.songList.find(song => {
      return song.id.attributes['im:id'] === this.state.selectedSongID
    })
    console.log(selectedSong);


    return (
      <Fragment>
        <h1>Top 20 UK Hits!</h1>
        <SongList songs={this.state.songList} onSongSelect={this.handleSongSelect}/>
        <h2>Song Detail</h2>
        <SongDetail song={selectedSong}/>
      </Fragment>
    )
  }
}

export default SongContainer;
