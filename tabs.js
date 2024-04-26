const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const articles = document.querySelectorAll("article")
const pictures = document.querySelectorAll("picture")

tabList.addEventListener("keydown", changeTabFocus)
tabs.forEach(tab => tab.addEventListener("click", changeTabPanel))

tabFocus = 0
function changeTabFocus(e) {

    if(e.keyCode === 39  || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", -1)

    if(e.keyCode === 39) {
        tabFocus++
        if(tabFocus >= tabs.length) tabFocus = 0;
    } else {
        tabFocus--
        if(tabFocus < 0) tabFocus = tabs.length -1;
    };

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImg = targetTab.getAttribute("data-image");
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected",false)
    
    targetTab.setAttribute("aria-selected",true);
    
    hideContent(mainContainer, "picture")
    hideContent(mainContainer, "[role='tabpanel']")

    showContent(mainContainer, targetImg)
    showContent(mainContainer, targetPanel)
}

function hideContent(parent, selector){
    parent
        .querySelectorAll(selector)
        .forEach(content => content.setAttribute("hidden",true));
}
function showContent(parent, selector){
    parent.querySelector([`#${selector}`]).removeAttribute("hidden");
}