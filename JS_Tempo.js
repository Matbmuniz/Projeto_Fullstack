var btn = document.querySelector('#show-or-hide');
var e = document.querySelector(".container-fluid");

btn.addEventListener('click', function() {

if(e.style.display === 'block'){
    e.style.display = 'none';
} else {
    e.style.display = 'block'
}

});

        