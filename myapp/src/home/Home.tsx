import * as React from 'react';
import AddLocationWindow from './AddLocationWindow';
import './Home.css';
import LocationInfo from './LocationInfo';
import NavBar from './NavBar';

interface HomeProps {}; 
interface HomeState { surveyData: Object };
class Home extends React.Component<HomeProps, HomeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      surveyData: {}
    }
  }

  public locationDataSubmitted = (data: any) => {
    this.setState({surveyData: data});
  }
  public render() {
    return (
      <div className="Home">
        <NavBar />
        <LocationInfo surveyData={this.state.surveyData}/>
        <AddLocationWindow locationDataSubmitted={this.locationDataSubmitted} />
      </div>
    );
  }
}

export default Home;
