import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About M3',
    pathname: '/#details',
  },
  {
    label: 'Resume',
    pathname: '/articles',
  },
  {
    label: 'Reach Out',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'playstore',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'playstore',
  },
  {
    label: 'LinkedIn',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
