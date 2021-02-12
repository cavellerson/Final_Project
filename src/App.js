import React, { Component } from 'react'
import axios from 'axios'


class App extends React.Component {
    state =  {
        body: "",
        vote: 0
    }

    render = () => {
        return (
            <div className="App">
                <div>
                <p>Welcome to happiness where you can escape and be in your happy place.

                This is what makes me happy</p>

                <button className="picture_button">Pictures</button>
                <img clasName="cat" src="https://cdn.discordapp.com/attachments/618539506529992705/706640070253346826/lilyosqwikw41.png" alt=""></img>
                <button>Music</button>
                </div>
            </div>
        );
    }
}


export default App;
