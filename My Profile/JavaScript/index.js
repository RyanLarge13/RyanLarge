//All events for media query toggling the side menu will go under here

//navigation variable
const head = document.querySelector('header');

//menu toggle with spans inside
const sideMenuToggle = document.querySelector(".side-menu-toggle-body");
//span variables
const openCloseSideMenu = () => {
const span1 = document.querySelector(".toggle-span:nth-child(1)");
const span2 = document.querySelector(".toggle-span:nth-child(2)");
const span3 = document.querySelector(".toggle-span:nth-child(3)");
const asideToggle = [span1, span2, span3];



for (let k = 0; k < asideToggle.length; k++) {
  if (asideToggle[k].classList.contains('.toggle-span')) {
    asideToggle[k].classList.remove('.toggle-span');
    asideToggle[k].classList.add('active');
    head.classList.remove('header');
    head.classList.add('mobile-header-show');
  }
  else if (asideToggle[k].classList.contains('.active')) {
    asideToggle[k].classList.add('.toggle-span');
    asideToggle[k].classList.remove('active');
    head.classList.add("header");
    head.classList.remove("mobile-header-show");
  }
  else {
    asideToggle[k].classList.add('.toggle-span');
    asideToggle[k].classList.remove('active');
    head.classList.add("header");
    head.classList.remove("mobile-header-show");
  }
}
return asideToggle;

};






//All of my on scroll events and animations will go below.

const introFadeIns = () => {
//navigation list items
const unOrderedNavList = document.querySelector('.nav-list');
const firstListInNav = unOrderedNavList.firstElementChild;
const navList = document.querySelectorAll('li');
//header and intro variables
const intro = document.querySelector('.intro');
// const nav = document.querySelector('nav');
// const header = document.querySelector('header');
//section one variables
const sectionOneParagraph = document.querySelector('.sec-1-p');
//card variables
const cardContainer = document.querySelectorAll('.card-container');
//view more button variable
const viewMore = document.querySelector('.view-more-container');

//scroll postion variable
let scrollActivator = window.scrollY;


//if conditions 
  if (scrollActivator < 150) {
    intro.style.opacity = '1';
    //changing the padding on the navigation list items
        navList.forEach((listItem) => {
          if (window.innerWidth < 1300) {
          listItem.style.margin = "1em 2em";
          listItem.style.padding = '.5em';
          }
        });
    //changing back the navigation to display flex
    unOrderedNavList.classList.remove('list-display-grid');
    unOrderedNavList.style.textAlign = 'left';
  }

  if (scrollActivator > 150) {
    intro.style.opacity = '0';
    //changing the padding on my navigation list items
    navList.forEach(listItem => {
      if (window.innerWidth < 1300) {
      listItem.style.margin = '.5em 2em';
      listItem.style.padding = '.2em';
      }
    });
    //changing the mobile navigation menu to display grid for better viewing
    firstListInNav.style.gridColumn = 'span 2';
    // firstListInNav.style.textAlign = 'center';
    unOrderedNavList.style.textAlign = 'center';
    unOrderedNavList.classList.add('list-display-grid');
  }

  //section one conditions
  if (scrollActivator < 300) {
    sectionOneParagraph.style.opacity = '0';
    sectionOneParagraph.style.transform = 'translateX(-20em)';
    //card container translate
    cardContainer.forEach(card => {
      card.style.transform = 'translateX(60em)';
    })
  }
  if (scrollActivator > 300) {
    sectionOneParagraph.style.opacity = '1';
    sectionOneParagraph.style.transform = 'translateX(0)';
    //card contaianer translate
    cardContainer.forEach(card => {
      card.style.transform = 'translateX(0)';
    });
  }

  //for view more button styling opacity on scroll
  if (scrollActivator < 600) {
    viewMore.style.opacity = '0';
  }
  if (scrollActivator > 600) {
    viewMore.style.opacity = '1';
  }
}


window.addEventListener('scroll', introFadeIns);













//view more cards function to make letters fly off the screen one by one on click
const viewMoreCards = () => {
  const letterDivs = document.querySelectorAll('.view-more-container div');
  let letters = Array.from(letterDivs);
  let lettersRev = letters.reverse();
  
   for (let k = 10; k > -1; k--) {
    setTimeout(() => {
      lettersRev[k].style.transform = 'translateX(40em)';
    }, 150 * k);
   }

};