import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <><Navbar bg="transparent" expand="lg" className='nav'>
            <Container>
                <Navbar.Brand href="#home"> <h2 className='Heading_main'>The Modernist</h2> <br></br> <h4 className='headin_sm'>Free PSD Website Tamplate</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='Nav_items'>Home</Nav.Link>
                        <Nav.Link href="#link" className='Nav_items'>STYLE DEMO</Nav.Link>
                        <Nav.Link href="#home" className='Nav_items'>FILL WIDTH</Nav.Link>
                        <Nav.Link href="#link" className='Nav_items'>DROPDOWN</Nav.Link>
                        <Nav.Link href="#home" className='Nav_items'>PORTFOLIO</Nav.Link>
                        <Nav.Link href="#link" className='Nav_items'> GALLERY</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar><>
                <container>
                    <div className="row hor">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <h1 className='text-1'> Cursus Penati <br></br> Saccum nulla</h1>
                            <h5 className='text-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae,
                                ab aliquam ipsum exercitationem facere delectus. Aspernatur commodi sunt quam facere, necessitatibus, </h5>
                            <button className='Readbtn'> Read More Here >> </button>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src="/roundpic.jpg" alt="round" className='round' />
                        </div>


                    </div>
                </container>
            </></>
    );
}

export default BasicExample;