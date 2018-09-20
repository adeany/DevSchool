import * as React from 'react';
import './Home.css';

interface AddressState {
    zoom: number,
    maptype: string,
    place_formatted: string,
    place_id: string,
    place_location: string,
}

interface AddressProps {
}

class AddressAutocomplete extends React.Component<AddressProps, AddressState> {

    constructor(props: any) {
        super(props);
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            place_formatted: '',
            place_id: '',
            place_location: '',
        };
    }

    componentDidMount() {
        // let marker = new google.maps.Marker({
        //     map: map,
        //     position: { lat: -33.8688, lng: 151.2195 },
        // });

        // initialize the autocomplete functionality using the #autocomplete input box
        let inputNode:any = document.getElementById('autocomplete');
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputNode);
        let autoComplete = new google.maps.places.Autocomplete(inputNode);

        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace();
            let location = place.geometry.location;

            this.setState({
                place_formatted: place.formatted_address,
                place_id: place.place_id,
                place_location: location.toString(),
            });

            // bring the selected place in view on the map
            // map.fitBounds(place.geometry.viewport);
            // map.setCenter(location);

            // marker.setPlace({
            //     placeId: place.place_id,
            //     location: location,
            // });
        });
    };

    public render() {
        return (
            <div>
                {/* <div id='state'>
                    <h1>State</h1>
                    <p>
                        Zoom level: {this.state.zoom}<br />
                        Map type: {this.state.maptype}
                    </p>
                    <p>Place: {this.state.place_formatted}</p>
                    <p>Place ID: {this.state.place_id}</p>
                    <p>Location: {this.state.place_location}</p>
                </div> */}
                <div id='container'>
                    <input id="autocomplete" type='textbox' className="form-control" placeholder="Enter a location" /> 
                </div>
            </div>
        );
    }

}

export default AddressAutocomplete;