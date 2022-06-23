//All events for media query toggling the side menu will go under here

const head = document.querySelector('header');
const spans = document.querySelectorAll('.toggle-span');
const navList = document.querySelector('nav ul');



const openCloseSideMenu = () => {

for (let k = 0; k < spans.length; k++) {
    spans[k].classList.toggle('active');
    head.classList.toggle('mobile-header-show');
  }

  if (head.classList.contains('mobile-header-show')) {
    navList.style.animationName = 'ul-transverse';
  }

  else {
    navList.style.animationName = 'none';
  }

};


//All of my on scroll events and animations will go below.

const introFadeIns = () => {
const unOrderedNavList = document.querySelector('.nav-list');
const firstListInNav = unOrderedNavList.firstElementChild;
const navList = document.querySelectorAll('li');
const intro = document.querySelector('.intro');
const sectionOneParagraph = document.querySelector('.sec-1-p');
const cardContainer = document.querySelectorAll('.card-container');
const viewMore = document.querySelector('.view-more-container a');
let scrollActivator = window.scrollY;



  if (scrollActivator < 150) {
    intro.style.opacity = '1';
        navList.forEach((listItem) => {
          if (window.innerWidth < 1300) {
          listItem.style.margin = "1em 2em";
          listItem.style.padding = '.5em';
          }
        });
    unOrderedNavList.classList.remove('list-display-grid');
    unOrderedNavList.style.textAlign = 'left';
  }

  if (scrollActivator > 150) {
    intro.style.opacity = '0';
    navList.forEach(listItem => {
      if (window.innerWidth < 1300) {
      listItem.style.margin = '.5em 2em';
      listItem.style.padding = '.2em';
      }
    });
    firstListInNav.style.gridColumn = 'span 2';
    unOrderedNavList.style.textAlign = 'center';
    unOrderedNavList.classList.add('list-display-grid');
  }

  if (scrollActivator < 300) {
    sectionOneParagraph.style.opacity = '0';
    sectionOneParagraph.style.transform = 'translateX(-20em)';
    cardContainer.forEach(card => {
      card.style.transform = 'translateX(80em)';
    })
  }
  if (scrollActivator > 300) {
    sectionOneParagraph.style.opacity = '1';
    sectionOneParagraph.style.transform = 'translateX(0)';
    cardContainer.forEach(card => {
      card.style.transform = 'translateX(0)';
    });
  }

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
  
   for (let k = 8; k > -1; k--) {
    setTimeout(() => {
      lettersRev[k].style.transform = 'translateX(40em)';
    }, 150 * k);
   }

};


// creating animation on tile button focus

const tileButtons = document.querySelectorAll('.tile-bg-btn');
const tileParagraphs = document.querySelectorAll('.paragraph-for-tile-front');

let tileArr = Array.from(tileButtons);
let paraArr = Array.from(tileParagraphs);

const btnShow = (btn) => {
  btn.parentElement.classList.add('tile-bg-opacity');
  paraArr[tileArr.indexOf(btn)].classList.add('para-opacity');
}
const btnHide = (btn) => {
  btn.parentElement.classList.remove('tile-bg-opacity');
  paraArr[tileArr.indexOf(btn)].classList.remove('para-opacity');
}


tileButtons.forEach(btn => {
  btn.addEventListener('focusin', () => {  
    btnShow(btn)
  })
});
tileButtons.forEach(btn => {
  btn.addEventListener('focusout', () => {  
    btnHide(btn)
  })
});


