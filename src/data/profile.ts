import { FaLinkedin, FaRegIdBadge } from "react-icons/fa6";

export const profile = {
  name: `Matthew Tamayo`,
  headline: `Aerospace Engineering Student | Systems & Aerodynamics`,
  email: `mtamayo2486@gmail.com`,
  location: `The Ohio State University`,
  profileImage: `/REPOSITORY/images/profile.jpeg`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/tamayom`,
      icon: FaLinkedin
    },
    {
      name: `Résumé`,
      url: `/REPOSITORY/pdf/matthew-tamayo-resume.pdf`,
      icon: FaRegIdBadge
    }
  ],
  biography: `<p>I'm <strong>Matthew Tamayo</strong>, an Aerospace Engineering student at <strong>The Ohio State University</strong>, working toward my B.S. in May 2028. My interests include aerodynamics, spacecraft mission design, and computational simulation.</p>
<p>I've applied MATLAB, CFD, FEA, and CAD in aircraft design, NASA L'SPACE mission planning, robotic systems, and hypersonic reentry analysis. I enjoy taking engineering ideas from trade studies and calculations to practical design decisions.</p>
<p>Beyond technical work, I serve as President of Lambda Phi Epsilon and have helped lead the Co-Lab-eration Engineering Club. I'm always happy to connect about engineering and collaborative projects.</p>`
};