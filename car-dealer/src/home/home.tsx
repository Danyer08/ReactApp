import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
    state = {
        list: []
    }

    columns = [
        <th key='1'>Name</th>,
        <th key='2'>Brand</th>,
        <th key='3'>Motor</th>,
        <th key='4'>Initial Price</th>,
        <th key='5'>Total Price</th>,
        <th key='6'>Available</th>
    ];

    data = [
        <tr key='1'>
            <td>Picanto</td>
            <td>Kia</td>
            <td>V4 2.0</td>
            <td>100,000</td>
            <td>380,000</td>
            <td>8</td>
        </tr>,
        <tr key='2'>
            <td>Lancer</td>
            <td>Mitsubishi</td>
            <td>V6 3.4</td>
            <td>260,000</td>
            <td>540,000</td>
            <td>3</td>
        </tr>,
        <tr key='3'>
            <td>Highlander</td>
            <td>Toyota</td>
            <td>V6 4.0</td>
            <td>300,000</td>
            <td>800,000</td>
            <td>6</td>
        </tr>
    ]

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then(res => {
                this.setState({list: res.data});
                console.log(this.state.list);
            })
    }

    render() {
        return (
            <div className='row'>
                <div className="col-xs-12">
                    <div className="container">
                        <div className="d-flex">
                            <div className="card rounded-0 card-dimensions">
                                <div className="card-header header-background">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className='card-title'>Car List</h1>
                                        </div>
                                        <div className="col">
                                            <a className='btn btn-custom-style float-right' role="button" href="/card-registration">Add Car</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className='thead-dark'>
                                                <tr>{this.columns}</tr>
                                            </thead>
                                            <tbody>
                                                {this.data}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
