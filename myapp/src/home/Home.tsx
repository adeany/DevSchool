import * as React from 'react';
import AddLocationWindow from './AddLocationWindow';
import './Home.css';
import LocationInfo from './LocationInfo';
import NavBar from './NavBar';

interface HomeProps {}; 
interface HomeState { surveyData: Object, showSurvey: boolean};
class Home extends React.Component<HomeProps, HomeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      surveyData: {additionalQuestions: [], address: "", ratings: [false, false, false, false]},
      showSurvey: false,
    }
  }

  public locationDataSubmitted = (data: any) => {
    this.setState({surveyData: data, showSurvey: true});
  }

  public render() {
    return (
      <div className="Home">
        <NavBar />
        <LocationInfo surveyData={this.state.surveyData} showSurvey={this.state.showSurvey} />
        <AddLocationWindow locationDataSubmitted={this.locationDataSubmitted} />
      </div>
    );
  }
}

export default Home;
