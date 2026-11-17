'use strict';

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });
}

// Feature 1: Explore career fields related to an IT interest.
const careerPaths = [
  {
    id: 'support',
    title: 'IT support',
    field: 'Technical support and service operations',
    description: 'Help people and organizations solve hardware, software, account, and connectivity problems.',
    salary: 'Computer user support specialists had a U.S. median annual wage of $61,860 in May 2025. Computer network support specialists had a median of $76,220.',
    opportunities: [
      'Help-desk or service-desk technician',
      'Desktop support technician',
      'Computer user support specialist',
      'With experience: systems administrator, network administrator, or information security analyst'
    ],
    outlook: 'The BLS projects about 48,700 openings per year for computer support specialists overall from 2025 to 2035. Overall employment is projected to decline 3%, with many openings replacing workers who leave the occupation.',
    source: 'U.S. Bureau of Labor Statistics: Computer Support Specialists',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm'
  },
  {
    id: 'network',
    title: 'Network administration',
    field: 'Network and systems operations',
    description: 'Install, maintain, and secure the networks, servers, and systems that organizations rely on.',
    salary: 'Network and computer systems administrators had a U.S. median annual wage of $99,130 in May 2025.',
    opportunities: [
      'Network administrator',
      'Systems administrator',
      'Network support specialist or network operations center technician',
      'With experience: computer network architect or IT operations lead'
    ],
    outlook: 'The BLS projects about 13,400 openings per year for network and computer systems administrators from 2025 to 2035, even though overall employment is projected to decline 4%. Many openings are expected to replace workers who leave the occupation.',
    source: 'U.S. Bureau of Labor Statistics: Network and Computer Systems Administrators',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
  },
  {
    id: 'forensics',
    title: 'Digital forensics',
    field: 'Cyber investigations and digital evidence',
    description: 'Preserve and analyze digital evidence from devices, files, and network activity to support security or legal investigations.',
    salary: 'O*NET maps Digital Forensics Analysts to the broader Computer Occupations, All Other wage group, whose 2025 U.S. median was $116,580 per year. This is a broad-group figure, not a digital-forensics-specific median.',
    opportunities: [
      'Computer forensics analyst',
      'Digital forensic examiner or specialist',
      'Cyber incident investigation analyst',
      'Work in government, law enforcement, or professional and technical services'
    ],
    outlook: 'O*NET reports 27,000 projected openings from 2025 to 2035 for the broader Computer Occupations, All Other group; this estimate is not specific to digital forensics.',
    source: 'O*NET OnLine: Digital Forensics Analysts',
    url: 'https://www.onetonline.org/link/summary/15-1299.06'
  }
];
const careerForm = document.querySelector('#career-form');
if (careerForm) {
  careerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = document.querySelector('#career-interest').value;
    const result = document.querySelector('#career-result');
    const path = careerPaths.find((item) => item.id === selected);

    if (!path) {
      result.textContent = 'Choose an area to see related career fields and salary information.';
      return;
    }

    result.replaceChildren();

    const heading = document.createElement('h3');
    heading.textContent = path.title;
    result.append(heading);

    const addDetail = (label, text) => {
      const paragraph = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = `${label}: `;
      paragraph.append(strong, document.createTextNode(text));
      result.append(paragraph);
    };

    addDetail('Related field', path.field);
    addDetail('What the work involves', path.description);
    addDetail('U.S. salary data', path.salary);

    const opportunitiesLabel = document.createElement('p');
    const opportunitiesStrong = document.createElement('strong');
    opportunitiesStrong.textContent = 'Possible career opportunities';
    opportunitiesLabel.append(opportunitiesStrong);
    result.append(opportunitiesLabel);

    const list = document.createElement('ul');
    for (const opportunity of path.opportunities) {
      const item = document.createElement('li');
      item.textContent = opportunity;
      list.append(item);
    }
    result.append(list);

    addDetail('Job outlook', path.outlook);

    const source = document.createElement('a');
    source.href = path.url;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = `Source: ${path.source}`;
    result.append(source);
  });
}

// Feature 2: Add a keyboard-accessible light/dark appearance switch.
const themeButton = document.createElement('button');
themeButton.className = 'theme-toggle';
themeButton.type = 'button';
themeButton.setAttribute('aria-pressed', 'false');
themeButton.textContent = 'Dark theme';
const header = document.querySelector('.site-header');
if (header) {
  header.append(themeButton);
  themeButton.addEventListener('click', () => {
    const dark = document.body.dataset.theme !== 'dark';
    document.body.dataset.theme = dark ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.textContent = dark ? 'Light theme' : 'Dark theme';
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
