import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth'

import BlackLogo from '../../img/logo-negro.png';
import Background from '../../img/drone-login.jpg'

const containerLogin = {
  backgroundImage: `url(${Background})`
}

function Input({ onChange, label, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} onChange={onChange} required />
    </div>
  )
}

class Login extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    },
    error: ''
  }

  onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState((state) => ({
      credentials: {
        ...state.credentials,
        [name]: value
      }
    }));
  }

  submit = (e) => {
    e.preventDefault();

    const { email, password } = this.state.credentials;
    if (!email || !password) {
      return;
    }

    this.props.login(this.state.credentials)
      .then((res) => this.props.history.push("/app"))
      .catch(err => {
        this.setState({
          error: "Wrong email or password. Please try again."
        });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <div className="container-login" style={containerLogin}>
        <div className="col-1"></div>
        <div className="col-2">
          <div className="form-container">
            <div className="img-container">
              <img src={BlackLogo} />
            </div>
            <p>Por favor ingrese su nombre de usuario y contraseña para ingresar</p>
            <form onSubmit={this.submit}>
              <Input onChange={this.onChange} name="email" type="text" label="Usuario" />
              <Input onChange={this.onChange} name="password" type="password" label="Contraseña" />
              {error && (<label>{error}</label>)}
              <button className="btn btn-primary" type="submit">INGRESAR</button>
            </form>
          </div>
          <div className="footer-login">© COPYRIGHT {(new Date()).getFullYear()} FLYNORTH</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ listeners }, ownProps) => ({
  loading: listeners.loading
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);