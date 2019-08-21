import React, {Component} from 'react';
import { connect } from 'react-redux';

//Components
import AppOverview from "./AppOverview";
import ReduxOverview from "./ReduxOverview";
import DeploymentOverview from "./DeploymentOverview";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={"home"}>
       <AppOverview/>
        <hr/>
       <ReduxOverview/>
        <hr/>
        <DeploymentOverview/>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Home);