import React, {Component} from 'react'

class Comment extends Component {
    render = () => {
        const date = new Date(this.props.comment.date);
        let time = date.toLocaleTimeString('en-US')
        return (

            <div className="comment_container">
                <h4 id="body">{this.props.comment.body}</h4>
                <p>@ {date.toDateString()} {time}

                <button
                id="deleteButton"
                className="btn btn-outline-danger"
                value={this.props.comment._id} onClick={this.props.deleteComment}
                > X </button>

                </p>
                <p>{this.props.comment.votes}</p>
                <div className="voteButtons">
                <button
                className="btn btn-outline-dark"
                id="upvoteButton" value={this.props.comment._id}
                onClick={this.props.upvoteComment}>up</button>

                <button
                className="btn btn-outline-dark"
                id="downvoteButton"
                value={this.props.comment._id}
                onClick={this.props.downvoteComment}>down</button>
                </div>

            </div>
        )
    }
}

export default Comment
