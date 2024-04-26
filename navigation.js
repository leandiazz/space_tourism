const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// const body = document.getElementsByTagName("body")
// const pageName = body[0].attributes.class.value

// const selectedPage = `${pageName}-page`

// const currentPage = document.getElementById(selectedPage)
// console.log(currentPage)