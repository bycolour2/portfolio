# React Developer Portfolio template
#### Live Demo
#### Figma Design https://www.figma.com/community/file/1116246660507537002

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: 'Rustam',
  tagline: 'I build things for web',
  img: profile,
  about: `I'm an enthusiastic and detail-oriented Frontend developer, highly motivated to writing clear, concise, robust code that works. I have passion for both personal growth and for software development.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  github: 'https://www.github.com/bycolour2',
  discord: 'https://discordapp.com/users/135416426369515520',
  telegram: 'https://t.me/bycolour',
  linkdein: '',
};

// Enter your Work Experience here
export const workDetails = [
  {
    position:
      'Senior specialist of User Support Department at Information Management Systems Directorate',
    company: `Gazprom Procurement LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Aug 2020 - Present',
  }
];

// Enter your Education Details here
export const educationDetails = [ ... ];

// Tech Stack
export const techStackDetails = { ... };

// Tools
export const toolsDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```