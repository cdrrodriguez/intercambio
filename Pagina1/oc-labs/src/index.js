import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import { Icon } from 'semantic-ui-react';
import img14 from '../src/images/walletr-icon.png';


//Cargar la fuente
WebFont.load({
  google: {
    families: ['Ubuntu']
  }
});

document.title = "Over Chain Labs";   
 //Renderiza los componentes en el div root del html
ReactDOM.render(<Routes />, document.getElementById('root'));

//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
