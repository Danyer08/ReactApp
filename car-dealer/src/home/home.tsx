import React from 'react';


export default class Home extends React.Component {
    list = [];

    columns = [
        <th>Name</th>,
        <th>Brand</th>,
        <th>Motor</th>,
        <th>Initial Price</th>,
        <th>Total Price</th>,
        <th>Available</th>
    ];

    data = [
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

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data) => {
                this.list = data;
                console.log(this.list)
            })
            .catch(console.log)
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
