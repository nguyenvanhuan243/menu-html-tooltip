let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
}

const tooltip = document.querySelector('.tooltip');
console.log("tooltip ############################################", tooltip)

const navList = document.querySelector('.nav-list');
navList.addEventListener('mouseover', ({ target }) => {
    const item = target.matches('[data-tooltip]') ? target : target.closest('[data-tooltip]');
    if (item) {
        const { top, right } = item.getBoundingClientRect();
        console.log("############################################: Top", top)
        console.log("############################################: Right", right)
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${right + 10}px`;
        tooltip.innerText = item.dataset.tooltip;
        tooltip.classList.add('show');
        console.log("tooltip ############################################ add: ", tooltip.classList)
    }
});
navList.addEventListener('mouseout', ({ target }) => {
    const item = target.matches('[data-tooltip]') ? target : target.closest('[data-tooltip]');
    if (item) {
        tooltip.classList.remove('show');
        console.log("tooltip ############################################ remove: ", tooltip.classList)
    }
});
