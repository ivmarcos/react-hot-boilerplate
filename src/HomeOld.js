import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import VideoSlider from './VideoSlider';
import { Card, CardText } from 'material-ui/Card';
import Text from 'material-ui/TextField';
import NavBar from './NavBar';
import Slide from './Slide';


class App extends Component {
  render() {
    return (

      <div>

       <NavBar/>

        <VideoSlider>

          <Slide>

            <div id="lab_video_text_overlay">
              <div className="container">
              </div>
            </div>


          </Slide>

          <Slide>

          </Slide>

          <Slide>

          </Slide>

        </VideoSlider>

        <div className="wrapper-fixo">

          <div className="container">

            <div className="card">
              <Card>
                <CardText>

                  <Text hintText="Olá, digite o que você procura." />
                </CardText>
              </Card>
            </div>
          </div>

        </div>

        <div className="wrapper">

          <div className="container">
            <h1>A vida continua normal.</h1>
          </div>

        </div>

      </div>

    );
  }
}


export default App;