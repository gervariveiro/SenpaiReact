import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faPlay, faInfo} from '@fortawesome/free-solid-svg-icons';


function Icons () {

    return (
        <ul className="player" style={{fontSize:'1.2em', color:'white'}}>
            <li><FontAwesomeIcon icon={faPlus}/><br/><br/>Mylist</li>
            <li><FontAwesomeIcon icon={faPlay}/><br/><br/>Play</li>
            <li><FontAwesomeIcon icon={faInfo}/><br/><br/>Info</li>
        </ul>
    )
    }

export default Icons;