
import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
    return (
        <div className='f-main'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent' , border: 'none' }}>

                            <Card.Body>

                                <h1 className=' blog-post'> FROM THE BLOG </h1>
                                <Card.Text>
                                    <div className="p-title">
                                        Post title </div>
                                    <h5 className='admin'>Admin,</h5> <h6 className="date">domainname.com</h6>
                                    <div className="date">Friday 26 April,2000</div>
                                    <div className="date">
                                        culpa adipisci, at modi ullam qui officia nostrum minus enim ex, aut quaerat impedit eveniet deserunt.
                                    </div>
                                    <div className="readmore">
                                                Read More >>
                                    </div>
                                </Card.Text>


                            </Card.Body>

                        </Card>



                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent', border: 'none' }}>

                            <Card.Body>

                                <h1 className=' blog-post'> Quick Links</h1>
                                <Card.Text>
                                    <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       <div className="card2">
                                       lorem ispum dollar site </div> <hr />
                                       
                                </Card.Text>


                            </Card.Body>

                        </Card>



                    </div>
                    

                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent' , border: 'none' }}>
                           
                                <Card.Body>
                                    <h1 className='blog-post'> Lates Twet</h1>
                                     <h3 className='card-text'> <span className='namehere'>@namehere </span>Ipsa perf voluptatum ipsum minus aliquam.
                                     Dicta ducimus ut molestias nisi dolorum accusantium facere, aliquam.
                                     Dicta ducimus ut molestias nisi dolorum accusantium facere .</h3>
                                     <h3 className='card-text'> <span className='namehere'>@namehere </span>Ipsa perf voluptatum ipsum minus aliquam.
                                     Dicta ducimus ut molestias nisi dolorum accusantium facere, .</h3>
                                </Card.Body>
                            
                        </Card>


                    </div>

                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent', border: 'none' }}>
                            
                                <Card.Body>
                                     <div className="blog-post"> Contact Us</div>
                                    <input type="text" className='card-inputs' placeholder='Full Name' />
                                    <input type="text" className='card-inputs' placeholder='Eemail Adress' />
                                    <input type="text" className='card-inputs' placeholder='Subject' />
                                    <input type="text" className='card-inputts' placeholder='Message' />

                                    

                                </Card.Body>
                            
                        </Card>


                    </div>

                </div>

            </div>

        </div>
    )
}

