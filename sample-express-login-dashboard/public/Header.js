module.exports = function Header() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Your Logo';

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeLink = createNavLink('Home', '#');
    const aboutLink = createNavLink('About', '#');
    const contactLink = createNavLink('Contact', '#');

    nav.appendChild(homeLink);
    nav.appendChild(aboutLink);
    nav.appendChild(contactLink);

    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

function createNavLink(text, url) {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = url;
    return link;
}

