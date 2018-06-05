import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: true
    };
  }

  handlePoemChange = (event) => {
    this.setState({
      poem: event.target.value,
      isValid: poemChecker(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoemChange} />
        {!this.state.isValid ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    );
  }
}

function poemChecker(poem){
  // debugger
  const poemLines = poem.split("\n").map(eachLine => eachLine.trim());
   const correctLines = (poem.split("\n").length === 3);
   if (poem && correctLines) {
     return (
       (poemLines[0].split(" ").length === 5) &&
       (poemLines[1].split(" ").length === 3) &&
       (poemLines[2].split(" ").length === 5)
     );
   } else {
     return false;
   }
}

export default PoemWriter;
