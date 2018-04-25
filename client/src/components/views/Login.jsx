import React, { Component } from 'react';
import BlackLogo from '../../img/logo-negro.png';
import Background from '../../img/drone-login.jpg'

const containerLogin = {
  backgroundImage: `url(${Background})`
}

class Login extends Component {
  state = {
    user: '',
    password: ''
  }

  onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container-login" style={containerLogin}>
        <div className="col-1"></div>
        <div className="col-2">
          <div className="form-container">
            <div className="img-container">
              <img src={BlackLogo} />
            </div>

            <p>Por favor ingrese su nombre de usuario y contraseña para ingresar</p>
            <label>Usuario</label>
            <input type="text" name="user" onChange={this.onChange}/>
            <label>Contraseña</label>
            <input type="password" name="password" onChange={this.onChange}/>
            <button className="btn btn-primary">INGRESAR</button>
          </div>
          <div className="footer-login">© COPYRIGHT 2015 FLYNORTH</div>
        </div>
      </div>
    );
  }
}

export default Login;