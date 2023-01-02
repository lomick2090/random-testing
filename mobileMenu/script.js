function dropdown() {
    document.querySelector('.dropdownmenu').classList.toggle('menudropped');
}

function selecttab(item) {
    document.querySelector('#selectedtab').id = '';
    item.id = 'selectedtab';
    if (document.querySelector('.menudropped')) {
        document.querySelector('.dropdownmenu').classList.toggle('menudropped');
    }
    
}


document.querySelectorAll('.menuitem').forEach(item => item.addEventListener('click', () => selecttab(item)));

document.querySelector('#menu').addEventListener('click', () => dropdown());