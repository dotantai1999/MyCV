import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
class Education extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>EDUCATIONS</strong>
                        </h6>
                        <table className='striped'>
                            <thead>
                                <tr>
                                    <th>dfssfdssdfdfs</th>
                                    <th>dfssfdssdfdfs</th>
                                    <th>dfssfdssdfdfs</th>
                                    <th>dfssfdssdfdfs</th>
                                    <th>dfssfdssdfdfs</th>
                                    <th>dfssfdssdfdfs</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>dfssfdssdfdfs</td>
                                    <td>dfssfdssdfdfs</td>
                                    <td>dfssfdssdfdfs</td>
                                    <td>dfssfdssdfdfs</td>
                                    <td>dfssfdssdfdfs</td>
                                    <td><Link to='/' className='btn blue lighten-2'>View</Link></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
