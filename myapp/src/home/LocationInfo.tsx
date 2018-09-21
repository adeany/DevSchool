import * as React from 'react';
import './Home.css';
import Map from './Map';

interface LocationInfoProps { surveyData: Object, showSurvey: boolean };
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
                    <li className='list-group-item form-control commentColor'>{entry['comment']}</li>
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

    public renderRatings() {
        let surveyRatings: Array<any> = [];
        let dropdownOptions = [];
        for (let i = 1; i <= 10; i++) {
            dropdownOptions.push(<option value={i}>{i}</option>)
        }
        let dropdown = <select className="custom-select" aria-label="">{dropdownOptions}</select>

        if (this.props.surveyData['ratings'][0] == true) {
            surveyRatings.push(<div id="rating">
                <p className="lead" >On a scale of 1-10, how safe is this location?</p>
                {dropdown}
            </div>)
        }
        if (this.props.surveyData['ratings'][1] == true) {
            surveyRatings.push(<div id="rating">
                <p className="lead" >On a scale of 1-10, how would you rate this neighborhood?</p>
                {dropdown}
            </div>)
        }
        if (this.props.surveyData['ratings'][2] == true) {
            surveyRatings.push(<div id="rating">
                <p className="lead" >On a scale of 1-10, how would you rate the cost of this area?</p>
                {dropdown}
            </div>)
        }
        if (this.props.surveyData['ratings'][3] == true) {
            surveyRatings.push(<div id="rating">
                <p className="lead" >On a scale of 1-10, how would you rate the ease of commute from this location?</p>
                {dropdown}
            </div>)
        }
        return (
            surveyRatings
        )
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
                <div className="input-group mb-3" id="commentInput">
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

    public renderGetStarted() {
        return (
            <p className="lead" id='getStarted'>Click on a red marker to get started.</p>
        )
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
                    {!this.props.showSurvey && this.renderGetStarted()}
                    {this.props.showSurvey && this.renderRatings()}
                    {this.props.showSurvey && this.renderSurvey()}
                </div>
            </div>
        );
    }
}

export default LocationInfo;