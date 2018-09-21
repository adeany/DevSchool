import * as React from 'react';
import './Home.css';
import Map from './Map';

interface LocationInfoProps { surveyData: Object };
interface LocationInfoState { commentText: string, addedComments: Array<Object> };

class LocationInfo extends React.Component<LocationInfoProps, LocationInfoState>{

    constructor(props: any) {
        super(props);

        this.state = {
            commentText: '',
            addedComments: [],
        }

        this.addComment = this.addComment.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    public getComments = (currentQuestion: string) => {
        var comments: any = [];
        this.state.addedComments.forEach((entry: Object) => {
            if (entry['question'] === currentQuestion) {
                comments.push(
                    <li className='list-group-item form-control'>{entry['comment']}</li>
                );
            }
        });
        return comments;
    }

    public commentChanged = (event: any) => {
        this.setState({ commentText: event.target.value });
    }

    public addComment = (currentQuestion: string) => {
        var commentText: string = this.state.commentText;
        if (commentText) {
            var newComment: Object = { question: currentQuestion, comment: commentText };
            var comments = this.state.addedComments;
            comments.push(newComment);
            this.setState({ addedComments: comments, commentText: '' });
        }
    }

    public renderSurvey() {
        let surveyQuestions: Array<any> = [];
        console.log("data: ", this.props.surveyData);
        this.props.surveyData['additionalQuestions'].forEach((question: string) => {
            console.log("question: ", question);
            surveyQuestions.push(<div id="markerInfo" className="container" >
                <p className="lead" id='locationSurvey'>{question}</p>
                <br/>
                <ul id="comments" className="list-group commentsGroup">{this.getComments(question)}</ul>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Comment goes here..."
                        aria-describedby="button-addon2" onChange={this.commentChanged} id="newComment" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" id="commentBtn" onClick={event => this.addComment(question)}>Comment</button>
                    </div>
                </div>
            </div>)
        });
        return surveyQuestions;
    }

    public render() {
        return (
            <div className='container'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addModal"
                    id='addButton'> Add Location
        </button>
                {/* <div id="map" /> */}
                <Map address={this.props.surveyData['address']} />
                <div className='jumbotron'>
                    <h3 className="display-6">Share Your Thoughts!</h3>
                    <p className="lead" id='getStarted'>Click on a red marker to get started.</p>
                    {this.renderSurvey()}
                    {/* <div id="markerInfo" className="container" > */}
                    {/* TODO: make this container hidden */}
                    {/* <p className="lead" id='locationSurvey'>Survey question goes here</p>
                        <ul id="comments" className="list-group commentsGroup" />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Comment goes here..."
                                aria-describedby="button-addon2" id="newComment" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" id="commentBtn" onClick={this.testing}>Comment</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default LocationInfo;