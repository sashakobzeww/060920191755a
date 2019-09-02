import React, {Component} from 'react'
import './Profile.css'
import Manager from "./Manager/Manager";
import Services from "./Services/Services";

class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <Manager/>
                <Services/>
            </div>
        );
    }
}

export default Profile