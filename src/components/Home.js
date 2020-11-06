import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import Skill from './Skill'
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Profile from './Profile';

class Home extends Component {
    render() {
        return (
            <div>
                <section>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m4 l3">
                                <Profile />
                            </div>

                            <div className="col s12 m8 l9">
                                <About />
                                <Skill />
                                <Experience />
                                <Education />
                                <Portfolio />

                            </div>
                        </div>


                    </div>


                </section>
            </div>
        );
    }
}

export default Home;
