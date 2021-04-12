/* generic function for TOGGLE a class  */
function toggleClass(elem, nameClass) {
    document.querySelector(elem).classList.toggle(nameClass);
}

/* generic function for ADD a class  */
function addClass(elem, nameClass) {
    document.querySelector(elem).classList.add(nameClass);
}

/* generic function for REMOVE a class  */
function removeClass(elem, nameClass) {
    document.querySelector(elem).classList.remove(nameClass);
}
/* function to ADD a CLICK event listener to the SEARCH BUTTON */
const faSearch = document.querySelector('.fa-search');
faSearch.addEventListener('click', () => {
    toggleClass('.search', 'top100PercOp1');
    removeClass('.navigation', 'navigationOpen');
});

/* function to ADD a CLICK event listener to the MENU BUTTON */
const faBars = document.querySelector('.fa-bars');
faBars.addEventListener('click', () => {
    toggleClass('.navigation', 'navigationOpen');
    removeClass('.search', 'top100PercOp1');
});

/* function to ADD a CLICK event listener to the CLOSE BUTTON DIV SEARCH */
const closeSearch = document.querySelector('.closeSearch');
closeSearch.addEventListener('click', () => {
    toggleClass('.search', 'top100PercOp1');
    removeClass('.navigation', 'navigationOpen');
});