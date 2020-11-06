import React, { Component } from 'react';

class Experience extends Component {
    experiences = [
        {
            name: 'sdfdfs'
        },
        {
            name: 'sdfdfs'
        },
        {
            name: 'sdfdfs'
        }
    ];

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>EXPERIENCES</strong>
                        </h6>
                        {
                            this.experiences.map((experience) => {
                                return (
                                    <div className='row'>
                                        <div className='col s12 m4 l4 xl4'>
                                            <p className='teal year_exp white-text'>
                                                Jan <strong>2016</strong> - March <strong>2016</strong>
                                            </p>
                                        </div>
                                        <div className='col s12 m8 l8 xl8'>
                                            <blockquote className='no-pad'>
                                                <h6 class='no-pad mt-bottom'>
                                                    <strong>{experience.name}</strong>
                                                </h6>

                                                <p><strong>Address: </strong>sfddsfsdfdssdfdsfds</p>
                                                <p><strong>Address: </strong>sfddsfsdfdssdfdsfds</p>
                                                <p><strong>Address: </strong>sfddsfsdfdssdfdsfds</p>
                                                <p><strong>Address: </strong>sfddsfsdfdssdfdsfds</p>
                                            </blockquote>
                                        </div>
                                    </div>)
                            })
                        }



                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
