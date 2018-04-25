import React, { Component } from 'react';
import Background from '../../img/footer-icon.png';
import Logo from '../../img/logo-white.png';
import User from '../../img/profile-pic.jpg'

const footerStyle = {
  backgroundImage: `url(${Background})`
};

class PhotoEditor extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src={Logo} alt="flynorth logo" />
          </div>
          <div className="user-container">
            <div className="profile-pic"><img src={User} alt="user" /></div>
            <h2>Juan Manuel Velásquez</h2>
            <h3>Administrador</h3>
          </div>
        </header>
        <div className="content-area">
          <div id="toolbar">

            <div id="toolbarheader"></div>
            <div className="toolbar-tools">
              <button><span className="mdi mdi-printer"></span></button>
              <button><span className="mdi mdi-share-variant"></span></button>
            </div>

            <div className="tools">
              <div className="row">
                <button><span className="mdi mdi-format-annotation-plus"></span></button>
                <button><span className="mdi mdi-forum-outline"></span></button>
                <button><span className="mdi mdi-fullscreen"></span></button>
              </div>
              <div className="row">
                <button><span className="mdi mdi-grid"></span></button>
                <button><span className="mdi mdi-heart"></span></button>
                <button><span className="mdi mdi-check"></span></button>
              </div>
              <div className="row">
                <button><span className="mdi mdi-shuffle"></span></button>
                <button><span className="mdi mdi-ungroup"></span></button>
                <button><span className="mdi mdi-opacity"></span></button>
              </div>
            </div>

            <div className="btn-container-tools">
              <button className="cancel">Cancelar</button>
              <button className="save">Guardar</button>
            </div>
          </div>
          <canvas id="myCanvas"> </canvas>
        </div>
        <footer style={footerStyle}>
          <h2>Proyecto Torres de Atavanza</h2>
          <div className="footer-btn-container">
            <button className="btn"><span className="mdi mdi-plus"></span> Agregar</button>
            <ul className="indicadores">
              <li className="disponibles">Fotos disponibles</li>
              <li className="comentarios">Fotos con comentarios</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default PhotoEditor;