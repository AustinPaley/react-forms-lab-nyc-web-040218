import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      remainingChars: 140
    };
  }

  handleChange = (event) => {
    console.log("maxChars", this.state.maxChars);
    console.log("target", event.target.value.length);
    let remainingChars = this.props.maxChars - event.target.value.length
    this.setState({
      value: event.target.value,
      remainingChars: remainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Characters Left: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
