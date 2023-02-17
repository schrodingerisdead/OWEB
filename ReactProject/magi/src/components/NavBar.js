import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>/home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>/about</Nav.Link>
              <Nav.Link href="#explore" className={activeLink === 'explore' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('explore')}>/explore</Nav.Link>
              <Nav.Link href="#software-creations" className={activeLink === 'software-creations' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('software-creations')}>/software-creations</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/schrodingerisdead"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/oreskovam/"><img src={navIcon2} alt="" /></a>
              </div>
              <a
                href="mailto:gazi.jarin@mail.utoronto.ca"
                  className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  )
}