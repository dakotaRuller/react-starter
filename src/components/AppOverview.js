import React from 'react';

const AppOverview = () => (
  <div id="AppOverview">
    <h2>Welcome to this React.js starter (my flavor at least)</h2>
    <h3>A quick overview</h3>
    <h4>Getting started:</h4>
    <p>Simply <code className={"fomatted"}>cd</code> into the app run <code className={"formatted"}>npm install</code> then run <code className={"formatted"}>npm run start:dev</code> to run the development server or <code className={"formatted"}>npm run build && npm start</code> to run the production server.</p>
    <p>This is a development and production ready webapp built with react. Out of the box this app implements redux in a fairly simple way and is deployment ready(tested with heroku). Unlike <code className={"formatted"}>create-react-app</code> this template/starter gives you as the developer full control over the configuration, Meaning webpack,express, and babel. Dig in and happy coding.</p>
    <p>This app uses the following technologies:</p>
    <ul className={"technologies-list"}>
      <li className={"core"}>
        <div>
          <h4>Core technologies</h4>
          <ul className={"core-technologies"}>
            <li>express.js</li>
            <li>webpack</li>
            <li>babel</li>
          </ul>
        </div>
      </li>
      <li className={"frontend"}>
        <div>
          <h4>Frontend technologies</h4>
          <ul className={"frontend-technologies"}>
            <li>React.js</li>
            <li>Redux</li>
            <li>Sass</li>
          </ul>
        </div>
      </li>
    </ul>
    <p>You can view the <code className={"formatted"}>package.json</code> file to find a full list of technologies/npm packages being used in this app but the above mentioned are the main six that bring the app together.</p>
    <div className={"app-note"}>
      <p>
        <small>*Note: This app is not responsive and does not implement any sort of routing. If you wish to use this as a template to build your app you will have to manually add that functionality in yourself.*</small>
      </p>
    </div>
  </div>
);

export default AppOverview;
