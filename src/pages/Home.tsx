// pages/Home.tsx
import React from 'react';
import Section from '../components/Section';

const Home: React.FC = () => {
    return (
        <div className="home py-20">
            <Section>
                <h1>Welcome to Our Restaurant</h1>
                <h5>Thank you friends</h5>
                {/* Add more content here */}
            </Section>
            <Section>
                <h2>Today's Specials</h2>
                {/* Add a menu items component here */}
            </Section>
            <Section>
                <h2>Contact Us</h2>
                {/* Add an input form component here */}
            </Section>
            <Section>
                <h2>Notice Board</h2>
                {/* Add a notice board component here */}
            </Section>
        </div>
    );
}

export default Home;