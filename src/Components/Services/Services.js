import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Services = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="mt-5">
                <h6 className='d-flex align-items-center justify-content-center mb-3'>
                    <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    SERVICE DETAILS
                    <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                </h6>
                <div className="row">
                    {
                        items.map(item => (
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <CardGroup style={{ height: '320px', marginTop: '20px' }}>
                                    <Card className='card'>
                                        <div className='card-img'>
                                            <Card.Img variant="top" src={item.img} className='w-25' />
                                        </div>
                                        <Card.Body style={{ padding: '2px', marginTop: '2px' }}>
                                            <Card.Title style={{ fontWeight: '700', marginTop: '2px' }}>{item.name}</Card.Title>
                                            <h6>{item.basic}</h6>
                                            <h6>{item.medicine}</h6>
                                            <h6>{item.treatment}</h6>
                                            <h6>{item.reason}</h6>
                                            <h5 style={{ color: 'red', fontWeight: '600' }}>$ {item.price}</h5>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;