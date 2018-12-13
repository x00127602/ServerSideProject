// This is the Link API
import Link from 'next/link';

// Pass this content as 'props' to child components
const About = props => (
    <div>
      <p>About Next.js</p>
    </div>
  );
  
  module.exports = (req, res) => {
  res.end(`The date is ${Date.now()}`)
  }
  export default About;
