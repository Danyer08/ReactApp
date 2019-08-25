import React from 'react';
import './home.css';


const columns = [
    <th>Name</th>,
    <th>Brand</th>,
    <th>Motor</th>,
    <th>Initial Price</th>,
    <th>Total Price</th>,
    <th>Available</th>
];

const data = [
    <tr>
        <td>Picanto</td>
        <td>Kia</td>
        <td>V4 2.0</td>
        <td>100,000</td>
        <td>380,000</td>
        <td>8</td>
    </tr>,
    <tr>
        <td>Lancer</td>
        <td>Mitsubishi</td>
        <td>V6 3.4</td>
        <td>260,000</td>
        <td>540,000</td>
        <td>3</td>
    </tr>,
    <tr>
        <td>Highlander</td>
        <td>Toyota</td>
        <td>V6 4.0</td>
        <td>300,000</td>
        <td>800,000</td>
        <td>6</td>
    </tr>
]

const Home: React.FC = () => {
    return (
        <div className='row'>
            <div className="col-xs-12">
                <div className="container">
                    <div className="mt-5 d-flex">
                        <div className="card rounded-0 card-dimensions">
                            <div className="card-header header-background">
                                <div className="row">
                                    <div className="col">
                                        <h1>Car List</h1>
                                    </div>
                                    <div className="col">
                                        <a className='btn btn-custom-style float-right' role="button" href="/card-registration">Add Car</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead className='thead-dark'>
                                        <tr>{columns}</tr>
                                    </thead>
                                    <tbody>
                                        {data}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;