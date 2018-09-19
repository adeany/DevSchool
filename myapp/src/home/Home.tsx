import * as React from 'react';
import './Home.css';
import LocationInfo from './LocationInfo';
import NavBar from './NavBar';

class Home extends React.Component {

  constructor (props: any) {
      super(props);
  }

  public render() {
    return (
      <div className="Home">
        <NavBar />
        <LocationInfo />
      </div>
    );
  }
}

export default Home;