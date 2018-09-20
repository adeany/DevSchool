import * as React from 'react';
import './Home.css';

interface AddLocationProps { };
interface AddLocationState { value: string, customQuestionValue: string, showCustom: boolean };
class AddLocationWindow extends React.Component<AddLocationProps, AddLocationState> {

    public questionStyle = {
        marginBottom: '10px',
        marginTop: '15px',
    };

    public questionsDropdown: any = React.createRef();

    constructor(props: any) {
        super(props);
        this.state = {
            value: '0',
            customQuestionValue: "",
            showCustom: false,
        };

        this.submitLocation = this.submitLocation.bind(this);
        this.selectQuestion = this.selectQuestion.bind(this);
        this.addQuestionToList = this.addQuestionToList.bind(this);
        this.cancelCustom = this.cancelCustom.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.geolocate = this.geolocate.bind(this);
    }

    public submitLocation = () => {
        // console.log('in submit location function');
    }

    public selectQuestion = (event: any) => {
let v = event.target.value;
        this.setState({ value: event.target.value })
        if (v == "4")
        {
            this.toggleCustom();
        }
       // console.log(this.state.showCustom); 

    }

    public toggleCustom = () => {
        console.log ("toggle")
        this.setState({showCustom: !this.state.showCustom});
    }

    public addQuestionToList = () => {
        // console.log('in add question function');
    }

    public cancelCustom = () => {
        this.toggleCustom();
        // var selector = document.getElementById('addNewQuestionButton');
        // selector.selectedIndex = 0;
        // document.getElementById("customQuestionText").value = "";
        // document.getElementById("customQuestionText").placeholder = "Type custom question here";
        // document.getElementById("questionsDropdown").style.display = "flex";
        // document.getElementById("customQuestion").style.display = "none";
    }

    public customQuestionChange = (event: any) => {
        this.setState({ customQuestionValue: event.target.value });
    }

    public resetForm = () => {
        // console.log('in resetForm function');
    }

    public geolocate = () => {
        // console.log('in geolocate function');
    }

    public renderdrop() {
        return (
            <div className="input-group" id='questionsDropdown' ref={this.questionsDropdown}>
                <select className="custom-select" onChange={this.selectQuestion} id="addNewQuestionButton" aria-label="Select Questions to Ask">
                    <option value="0">Choose...</option>
                    <option value="1">Is this a fair price?</option>
                    <option value="2">Is this a safe area?</option>
                    <option value="3">How is the commute to the office?</option>
                    <option value="4" >Custom</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.addQuestionToList} >Add Question</button>
                </div>
            </div>
        )
    }

    public renderCustomQuestion() {
        return (
            <div className="input-group" id='customQuestion'>
                <input id='customQuestionText' value={this.state.customQuestionValue} onChange={this.customQuestionChange} className="form-control" placeholder="Type custom question here" type="text" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.cancelCustom}>Cancel</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.addQuestionToList}>Add</button>
                </div>
            </div>
        )
    }

    public render() {
        return (
            <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">Add Location</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div id="locationField" className="form-group">
                                    <label htmlFor='inputAddress'>Address</label>
                                    <input id="autocomplete" className="form-control" placeholder="Start typing address" onFocus={this.geolocate}
                                        type="textbox" />
                                    <small id="locateHelp" className="form-text text-muted">Location that you wish to request feedback on</small>
                                </div>

                                {/* Ratings to add to the survey */}
                                <div>
                                    <label htmlFor="checkRatingsLabel">Ratings Requested</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Safety</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Neighborhood</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Price</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox4">Ease of Commute</label>
                                </div>
                                {/* </div> */}
                                {/* Questions to add to the survey */}
                                <div style={this.questionStyle}>
                                    <div>
                                        <label htmlFor="addNewQuestionButton">Additional Questions</label>
                                    </div>
                                    {!this.state.showCustom && this.renderdrop()}
                                    {this.state.showCustom && this.renderCustomQuestion() }
                                </div>
                                <ul className="list-group" id='selectedQuestions' />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.resetForm} data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={this.submitLocation} data-dismiss='modal'
                                id='submitLocation'>Add Location</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddLocationWindow;