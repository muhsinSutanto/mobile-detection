import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderContent = () => {
        if (isMobile) {
            return <Mobile />
        }
        return <Desktop/>
    }

    render() { 
        return this.renderContent();
    }
}
 
export default Home ;