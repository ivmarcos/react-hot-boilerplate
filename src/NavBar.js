import React, { Component, PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import {blue700} from 'material-ui/styles/colors';

const styles = {
    wrapper:{
        backgroundColor: '#1e88e5'
    }
}

class NavBar extends Component {

    constructor(props){
        super(props);
    }


    render() {

        return (

            <div className="wrapper" style={styles.wapper}>

                <div className="container">
                    <AppBar
                        title="DISEM"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </div>

            </div>

        )

    }
}

export default NavBar;