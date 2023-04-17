const header = document.querySelector(".header")
// const navItems = document.querySelectorAll(".nav_items")

// console.log(navItems)

// let name = (' sej')

// function seyHello() {
//     let massage = 'Hello' + name;
//     console.log(massage)
// }

// seyHello()

// function simpleMath(a, b) {
//     let result = a + b;
//     return result;
// }
// let sun = simpleMath(11, 22)
// console.log(sun)



window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('header_red')
    }
    else {
        header.classList.remove('header_red')
    }
});