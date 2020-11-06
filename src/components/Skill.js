import React, { Component } from 'react';

class Skill extends Component {
    skills = [
        {
            skillName: 'HTML',
            percent: 30
        },
        {
            skillName: 'CSS',
            percent: 30
        },
        {
            skillName: 'Javascript',
            percent: 30
        },
        {
            skillName: 'HTML',
            percent: 30
        },
        {
            skillName: 'HTML',
            percent: 30
        },
        {
            skillName: 'HTML',
            percent: 30
        }

    ];

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>PROFESSIONAL SKILL</strong>
                        </h6>

                        <div className='row mt-top'>
                            {
                                this.skills.map((skill, index) => {
                                    return (<div className='col s6'>
                                        <p>{skill.skillName}</p>
                                        <div className='progress grey lighten-1'>
                                            <div className='determinate #b39ddb deep-purple lighten-1' style={{ width: `${skill.percent}%` }} />


                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;
