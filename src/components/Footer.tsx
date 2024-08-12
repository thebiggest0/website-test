// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="upper-footer">
                <div className="footer-text">
                    <p>Welcome to our restaurant. We serve delicious food with love.</p>
                </div>
                <div className="footer-info">
                    <p>Phone: (123) 456-7890</p>
                    <p>Location: 123 Main St, City, State 12345</p>
                </div>
            </div>
            <div className="lower-footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/catering">Catering</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;