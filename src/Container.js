import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="componentsContainer">
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
