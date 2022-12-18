import React from 'react'
import All from './all';
import Applications from './applications';
import Websites from './websites';
import Systems from './systems';


const Cards = ({value}) => {
   
    switch (value) {
        case '1':
           return <All />
            break;
        case '2':
           return <Applications />
        break;
        case '3':
           return <Websites />
        break;
        case '4':
           return <Systems />
        break;
        default:
           return <All />
        break;
    }
}

export default Cards