//Toggle button
var btn = document.querySelector('.btn');
var circle = document.querySelector('.circle');
var theme = document.querySelector('.Theme');
var bodyStatus = true



function changeTheme(sheet){

    circle.classList.toggle('active');

    if(circle.classList.contains('active')){
        theme.textContent = 'Dark Mode';
        document.getElementById('change').setAttribute('href','style1.css');
        btn.style.background = 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
        circle.style.background = 'hsl(232, 19%, 15%)';
    }
    else{
        document.getElementById('change').removeAttribute('href');
        theme.textContent = 'Light Mode';
        btn.style.background = 'grey';
        circle.style.background = 'white';

    }
    

};

