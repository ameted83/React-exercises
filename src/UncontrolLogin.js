import React, { createRef } from "react";

export class UncontrolLogin extends React.Component {
  _formRef = createRef();
  _userRef = createRef();

  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : console.log(value),
    });
  };

  render() {
    return (
      <div>
        <h3>My Uncrontrolled Form</h3>

        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input
            name="username"
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
            ref={this._userRef}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            onChange={this.handleInputChange}
          />
          <input
            name="remember"
            type="checkbox"
            onChange={this.handleInputChange}
          />
          <button
            disabled={(!this.state.username || !this.state.password) ?? true}
            onClick={() => this.props.currentState(this.state)}
          >
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
