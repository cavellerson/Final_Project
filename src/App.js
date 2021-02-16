import React, { Component } from 'react'
import Comment from './components/comment';
import Nav from './components/nav';
import axios from 'axios'


class App extends React.Component {
    state =  {
        body: '',
        votes: 0,
        comments: [],
        mostVotes: ''

    }

    mostVotes = () => {

        let max = 0
        let objectWithMostVotes = ''
        for (let object of this.state.comments) {

            if (object.votes > max) {
                max = object.votes;
                objectWithMostVotes = object
                this.setState({
                    mostVotes: objectWithMostVotes.body
                })
            }

        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    getComments = () => {
        axios.get('https://captionerx.herokuapp.com/comments')
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

    hideVoteButton = () => {
        document.querySelector('.voteButton').style.display = 'none';
    }

    upvoteComment = (event) => {
        axios.put('https://captionerx.herokuapp.com/comments/upvote/' + event.target.value).then((response) => {
            this.mostVotes()
            this.getComments();
        });

    }

    downvoteComment = (event) => {
        axios.put('https://captionerx.herokuapp.com/comments/downvote/' + event.target.value).then((response) => {
            this.mostVotes();
            this.getComments();
        });

    }


    componentDidMount = () => {
        this.getComments();
        this.mostVotes()

    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://captionerx.herokuapp.com/comments', this.state).then((response) => {
            this.getComments()
        })
    }

    deleteComment = (event) => {
        axios.delete('https://captionerx.herokuapp.com/comments/' + event.target.value).then((response) => {
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
                <p>Welcome to caption maker, the caption with the most votes becomes the caption of the given picture/gif!</p>




                <img className="image" src="https://media1.tenor.com/images/8a9c48bd8de465b549dc8684bf6404a4/tenor.gif?itemid=4649018" alt=""></img>
                <div id="caption">{this.state.mostVotes}</div>
                <div className="main-content">

                    <form id="commentingForm"
                    onSubmit={this.handleSubmit}>
                        <label htmlFor="comment"></label>
                        <input placeholder="..."
                        type="text"
                        id="body"
                        onChange={this.handleChange}
                        value={this.state.body}/>
                        <input type="submit"
                        id="commentButton"
                        value="comment"
                        className="btn btn-outline-success"/>

                    </form>
                    <div id="comments">
                    {this.state.comments.map((comment,index) => {
                        return (
                            <li key={index}>
                            <Comment id="comment"
                                comment={comment}
                                deleteComment={this.deleteComment}
                                handleChange={this.handleChange}
                                upvoteComment={this.upvoteComment}
                                downvoteComment={this.downvoteComment}
                                hideVoteButton={this.hideVoteButton}/>
                            </li>


                        )
                    })}
                    </div>

                </div>

                </div>
            </div>

        );
    }
}


export default App;
