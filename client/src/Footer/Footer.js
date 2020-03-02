import React from "react"
import FontAwesome from 'react-fontawesome'
import './Footer.css'

const Footer = () => (
  <footer>
    <hr />
    <div className="footer">

      <div className="footer-contact">

        <ul>
          <li><h6>CONTACT</h6></li>
          <li><a target="_top"  rel="noopener noreferrer" href="mailto:thinkphilosophy@nym.hush.com?Subject=Feature%20Request">Feature Request</a></li>
          <li><a target="_top"  rel="noopener noreferrer" href="mailto:thinkphilosophy@nym.hush.com?Subject=Report%20Bug">Report Bug</a></li>
        </ul>
        <hr />
        <ul>
          <li><h6>SUPPORT</h6></li>
          <li>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.patreon.com/thinkPhilosophy">
              <img className="patreon-logo" src="/patreon-logo.png" alt="patreon-logo"></img>
            </a>
          </li>
        </ul>
      </div>


      <div className="footer-social">
        <a target="_top"  rel="noopener noreferrer" href="mailto:thinkphilosophy@nym.hush.com?Subject=Inquiry%20About%20PPP">
          <FontAwesome
            className='social-button'
            name='envelope'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </a>
        <a target="_blank"  rel="noopener noreferrer" href="https://medium.com/@tPhilosophia">
          <FontAwesome
            className='social-button'
            name='medium'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </a>
        <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/tPhilosophia">
          <FontAwesome
            className='social-button'
            name='twitter'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </a>
      </div>
    </div>
    <div className="footer-legal">
      <small><p>Copyright &copy; 2019 AlfonsoTech - A thinkPhilosophy Production.</p></small>
    </div>
    </footer>
);

export default Footer;
