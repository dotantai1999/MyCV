import React, { Component } from 'react';
import ImgProfile from '../images/logo512.png'
import { HashLink as Link } from 'react-router-hash-link';
import '../style/Profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt='Galvin Do'></img>
                        <Link className='btn-floating halfway-fab waves-effect wave-ligh red'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>
                    </div>
                    <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4'>
                            Galvin Do
                        </span>
                        <p>Intern</p>
                    </div>

                    <div className='card-reveal'>
                        <span className='card-title activator grey-text text-darken-4'>
                            My Contact
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='flex-container'>
                            <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
                            <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
                            <i className='fab fa-google-plus-g grey-text text-darken-4 social-style'></i>
                            <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Profile;
