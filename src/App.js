import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import VideoRecorder from 'react-video-recorder';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <VideoRecorder
          style={{
            height: '30vw',
            video: '80%',
            width: '60%',
            margin: '0 auto',
            margin: '50px 0 0 0'
          }}

          onRecordingComplete = {(videoBlob) => {                        
            console.log('videoBlob', videoBlob)
            const url = URL.createObjectURL(videoBlob);
            console.log(url);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            console.log(a.href);
            a.download = new Date() +".webm";
            a.click();
            window.URL.revokeObjectURL(url);
          }} 
        />
      </div>
    )
  }
}

export default App;