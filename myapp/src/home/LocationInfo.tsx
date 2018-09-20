import * as React from 'react';
import './Home.css';
import Map from './Map';

interface LocationInfoProps { surveyData: Object };
class LocationInfo extends React.Component<LocationInfoProps>{

    constructor(props: any) {
        super(props);
    }

    public testing = () => {
        console.log(this.props.surveyData);
    }

    public renderSurvey() {
        let surveyQuestions: Array<any> = [];
        console.log("data: ", this.props.surveyData);
        this.props.surveyData['additionalQuestions'].forEach((question:string) => {
            console.log("question: ", question);
            surveyQuestions.push(<div id="markerInfo" className="container" >
                <p className="lead" id='locationSurvey'>{question}</p>
                <ul id="comments" className="list-group commentsGroup" />
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Comment goes here..."
                        aria-describedby="button-addon2" id="newComment" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" id="commentBtn" onClick={this.testing}>Comment</button>
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
                <Map />
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