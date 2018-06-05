import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
  }

handlePasswordChange = (event) => {
  this.setState({
    password: event.target.value
  })
}

handleUsernameChange = (event) => {
  this.setState({
    username: event.target.value
  })
}

logIn = (event) => {
  event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.logIn}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} onChange={this.handlePasswordChange} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
