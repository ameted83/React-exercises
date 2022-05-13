import React, { createRef } from "react";

export class UncontrolLogin extends React.Component {
  _formRef = createRef();
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  onLogin = () => {
    this._formRef.current.elements.username.value = "Amelia";
    this._formRef.current.elements.password.value = "yes6163";
    this._formRef.current.elements.remeber.checked = true;
  };

  render() {
    return (
      <div>
        <h3>My Uncrontrolled Form</h3>

        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.onLogin}>
            Prefill Form
          </button>
        </form>
      </div>
    );
  }
}
