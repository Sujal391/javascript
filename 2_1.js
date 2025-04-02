// Create a function that generates a navigation menu from an array of page names 

function createNavigationMenu(pages) {
    
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
    
        pages.forEach((page) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = page;
        a.href = `#${page.toLowerCase().replace(' ', '-')}`;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    document.body.appendChild(nav);
    
    return nav;
}

const pages = ['Home', 'About Us', 'Services', 'Contact'];
createNavigationMenu(pages);