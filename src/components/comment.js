import React, {Component} from 'react'

class Comment extends Component {
    render = () => {
        const date = new Date(this.props.comment.date);
        let time = date.toLocaleTimeString('en-US')
        return (

            <div className="comment_container">
                <p>{this.props.comment.body} @ {date.toDateString()} {time}

                <button
                value={this.props.comment._id} onClick={this.props.deleteComment}
                > X </button>
                </p>
                <p>{this.props.comment.votes}</p>
                <button value={this.props.comment._id}
                onClick={this.props.upvoteComment}>up</button>
                <button value={this.props.comment._id}
                onClick={this.props.downvoteComment}>down</button>

            </div>
        )
    }
}

export default Comment
