import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateTextAction } from '../redux/actionCreator';

class ReduxOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    e.target.value === "" ?
      this.props.dispatch(updateTextAction("redux text")) :
      this.props.dispatch(updateTextAction(e.target.value))
  }

  componentDidMount() {
    console.log(this.props.log)
  }

  render() {
    return (
      <div id="ReduxOverview">
        <h2>Redux Overview</h2>
        <p>You can go into the app and play around with all the different bits and pieces of react but for most redux is has a steep learning curve. The following wont attempt to teach you redux but it will show you how to play around with it in this app.</p>
        <p>If you open the developer tools and navigate to the console tab.</p>
        <p>Mac: <span className="formatted">⌥ + ⌘ + i</span>,</p>
        <p>Windows: <span className="formatted">ctrl + ⇧ + i</span></p>
        <p>You should see this: "log coming from redux" can you guess where that is coming from?</p>
        <p>If you go and look at the <code className={"formatted"}>ReduxOverview.js</code> file you will find several bits of code the first of which being where the <code className={"formatted"}>console.log</code> is coming from.</p>
        <p>The code responsible for that is this:  <code className={"formatted"}>{"componentDidMount() { console.log(this.props.log) }"}</code>.</p>
        <p>In order to make sure the state coming from redux is available to this component we must create a function to map state to props with <code className={"formatted"}>let mapStateToProps = reduxState => reduxState;</code>.</p>
        <p>We must also import the connect middleware function provided to us by react-redux via <code className={"formatted"}>{"import { connect } from 'react-redux';"}</code>.</p>
        <p>The final step is to use the connect middleware to link the state coming from redux to the props object on whatever component its being called on, in this case its <code className={"formatted"}>ReduxOverview.js</code>. This is done at the bottom of the file as the default export via <code className={"formatted"}>export default connect(mapStateToProps)(ReduxOverview);</code>.</p>

        <p>Feel free to go into the <code className={"formatted"}>~/src/redux</code> folder and add items to the <code className={"formatted"}>initialState</code> variable in the <code className={"formatted"}>store.js</code> file and call those items within any component.</p>
        <p>As for how the react state is being initialized. This is done in the <code className={"formatted"}>~/src/index.js</code> file and passed down to all child components via a middleware also provided to us from 'react-redux' called <code className={"formatted"}>{`<Provider store={store}><App/></Provider>`}</code>. The store passed into the Provider middleware is created by initalizing the default store coming from <code className={"formatted"}>~/src/redux/store.js</code> via <code className={"formatted"}>import initializeState from '../src/redux/store';</code> and set to a variable of 'store' via <code className={"formatted"}>let store = initializeState();</code>.</p>
        <p>You can see how all the pieces of redux are connected by looking at the three files in the <code className={"formatted"}>~/src.redux</code>file.</p>
        <p>Heres a working example of how to change the redux state:</p>
        <form>
          <label htmlFor="reduxStateChanger">Change State:</label>
          <div>
            <input id="reduxStateChanger" type="text" onChange={this.updateText}/>
          </div>
        </form>
        <p>Redux state item: <span className={"redux-text"}>{this.props.text}</span></p>
      </div>
    );
  }
}

let mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ReduxOverview);