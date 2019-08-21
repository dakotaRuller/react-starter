import React, {Component} from 'react';
import reactStarterLogo from '../../assets/images/react-starter.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        logoImg: reactStarterLogo,
        altText: "react starter logo"
      }
    }
  }
  render() {
    return (
      <div className={"nav"}>
        <div className={"nav-logo"}>
          <img src={this.state.logo.logoImg} alt={this.state.logo.altText}/>
        </div>
        <ul className={"nav-list"}>
          <li className={"nav-link tech"}>
            <a href="#AppOverview">Overview</a>
          </li>
          <li className={"nav-link redux"}>
            <a href="#ReduxOverview">Redux</a>
          </li>
          <li className={"nav-link deployment"}>
            <a href="#DeploymentOverview">Deployment</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;