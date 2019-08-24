import React, {Component} from 'react';
import reactStarterLogo from '../../assets/images/react-starter.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        logoImg: reactStarterLogo,
        altText: "react starter logo"
      },
      navItems: [
        {
          linkText: "Overview",
          href: "#AppOverview"
        },
        {
          linkText: "Redux",
          href: "#ReduxOverview"
        },
        {
          linkText: "Deployment",
          href: "#DeploymentOverview"
        }
      ]
    }
  }
  render() {
    return (
      <div className={"nav"}>
        <div className={"nav-logo"}>
          <img src={this.state.logo.logoImg} alt={this.state.logo.altText}/>
        </div>
        <ul className={"nav-list"}>
          {this.state.navItems.map((i, id) => (
            <li key={id} className={"nav-link tech"}>
              <a href={i.href}>{i.linkText}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;