import React, { Component } from 'react'
import Comment from './components/comment';
import Nav from './components/nav';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class App extends React.Component {
    state =  {
        body: '',
        votes: 0,
        comments: [],

    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    getComments = () => {
        axios.get('/comments')
        .then((response) => {
            this.setState({
                comments: response.data.reverse(),
                body: ''
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }



    componentDidMount = () => {
        this.getComments();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/comments', this.state).then((response) => {
            this.getComments()
        })
    }

    deleteComment = (event) => {
        axios.delete('/comments/' + event.target.value).then((response) => {
            this.getComments()
        })
    }

    hidePictures = () => {
        document.querySelector('.main-content').style.display = 'none';

    }



    render = () => {
        return (

            <div className="App">
                <div>
                <Nav/>
                </div>
                <div>
                <p>Welcome to my playground, this is a playground of everything i want to do yet not knowing how to execute it all</p>


                <img className="cat" src="https://cdn.discordapp.com/attachments/618539506529992705/706640070253346826/lilyosqwikw41.png" alt=""></img>
                <div className="main-content">
                    <h1>Comment</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="comment"></label>
                        <input placeholder="..."
                        type="text"
                        id="body"
                        onChange={this.handleChange}
                        value={this.state.body}/>
                        <input type="submit"
                        id="commentButton"
                        value="comment"/>

                    </form>
                    {this.state.comments.map((comment,index) => {
                        return (

                            <Comment id="comment"
                                key={comment.id}
                                comment={comment}
                                deleteComment={this.deleteComment}
                                handleChange={this.handleChange}/>


                        )
                    })}

                </div>
                <button onClick={this.hidePictures}>Music</button>
                </div>
            </div>

        );
    }
}


export default App;
