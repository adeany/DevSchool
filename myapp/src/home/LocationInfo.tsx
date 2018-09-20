import * as React from 'react';
import './Home.css';
import Map from './Map';

class LocationInfo extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className='container'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addModal"
                    id='addButton'> Add Location
        </button>
                <div id="map" />
                <Map/>
                <div className='jumbotron'>
                    <h3 className="display-6">Share Your Thoughts!</h3>
                    <p className="lead" id='getStarted'>Click on a red marker to get started.</p>
                    <div id="markerInfo" className="container" >
                        {/* TODO: make this container hidden */}
                        <p className="lead" id='locationSurvey'>Survey question goes here</p>
                        <ul id="comments" className="list-group commentsGroup" />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Comment goes here..."
                                aria-describedby="button-addon2" id="newComment" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" id="commentBtn">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationInfo;