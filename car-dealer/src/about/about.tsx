import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="container d-flex">
                        <div className="card rounded-0 card-dimensions">
                            <div className="card-header header-background">
                                <h1 className='card-title'>About Us</h1>
                            </div>
                            <div className="card-body text-center">
                                <img src="https://cdn.slidemodel.com/wp-content/uploads/6974-02-small-business-powerpoint-deck-blueish-16x9-4-870x489.jpg"
                                    className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}