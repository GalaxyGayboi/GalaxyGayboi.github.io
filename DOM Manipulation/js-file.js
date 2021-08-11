const container = document.querySelector('#container');
const p1 = document.createElement('p');
    p1.style.color = 'red';
    p1.textContent = "Hey I'm red!"
        container.appendChild(p1);
const h3 = document.createElement('h3');
    h3.style.color = 'blue';
    h3.textContent = "I'm a blue h3!";
        container.appendChild(h3);
const div = document.createElement('div');
    div.classList.add('div');
    div.style.backgroundColor = 'pink';
    div.style.border = 'black';
        container.appendChild(div)
        ;
const h1 = document.createElement('h3');
const p2 = document.createElement('p');
    div.appendChild(h1);
    div.appendChild(p2);
        h1.textContent = "I'm in a div";
        p2.textContent = "ME TOO!";

