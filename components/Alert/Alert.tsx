import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Alert = () => {
    return(
        <div>
            <h4>Alert</h4>
            <Popup trigger={<button> Click to open popup </button>}
                   position="right center">
                <div>Add your name</div>
                <input type="text" placeholder={"Name"}/>
                <button>Click here</button>
            </Popup>
        </div>
    )
};

export default Alert;