import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faPlay, faInfo} from '@fortawesome/free-solid-svg-icons';


function Devices () {

    return (
        <ul className="" style={{fontSize:'1.2em', color:'white'}}>
            <li><FontAwesomeIcon icon={faPlus}/><br/><br/>Mylist</li>
            <li><FontAwesomeIcon icon={faPlay}/><br/><br/>Play</li>
            <li><FontAwesomeIcon icon={faInfo}/><br/><br/>Info</li>
        </ul>
    )

    /*"fas fa-desktop fa-4x"
    fas fa-mobile fa-4x
    fas fa-gamepad fa-4x
    fas fa-tv fa-4x
    */
    }

export default Devices;