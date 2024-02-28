import React from "react";

class ClassWelcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>How are you?</h3>
      </div>
    );
  }
}

export default ClassWelcome;
