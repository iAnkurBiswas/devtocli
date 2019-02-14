// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
loadTop();

function loadTop() {
  document.getElementsByClassName('top-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('top-posts-console').length > 0) {
    var i = 0;
    var txt = `devto`

    var body = `
            ? 📚 Here are your posts:
            ❯ 13 Reasons Why Selenium WebDriver Should Be Your First Choice for Automation Testing!
              &nbsp; Imposter Syndrome in Diagrams
              &nbsp; What does full stack engineering mean to you?
              &nbsp; Performance Testing Elasticsearch
              &nbsp; Dev.to Review #15: Top 7 Of The Week, Discussed
              &nbsp; How To Setup Nginx For HLS Video Streaming On Centos 7
              &nbsp; The Books That Made All The Difference To Me As A Developer
            (Move up and down to reveal more choices)
              `;
    var speed = 50;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('top-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('top-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

function loadLatest() {
  document.getElementsByClassName('latest-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('latest-posts-console').length > 0) {
    var i = 0;
    var txt = `devto latest`
    var body = `
            ? 📚 Here are your posts:
            ❯ Doggy Care AR: Creating an Interactive AR Experience
              &nbsp; Which one to choose React Native, Flutter or Swift for Mobile App Development?
              &nbsp; Laravel + VueJS = Laravue - a beautiful dashboard for Laravel
              &nbsp; A Guide to Using Ruby on Rails Application Templates
              &nbsp; 🔄 Swap out test data in UI-licious with Datasets!
              &nbsp; R Language : Connect to SQLite database
              &nbsp; Announcing RSS Feed for LaravelCollections.com
            (Move up and down to reveal more choices)
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('latest-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('latest-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

function loadAuthor() {
  document.getElementsByClassName('author-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('author-posts-console').length > 0) {
    var i = 0;
    var txt = `devto author sarthology`
    var body = `
            ? 📚 Here are your posts:
            ❯ How to make Dynamic Text Overlays on Images
              &nbsp; What's the best source of caffeine for you? 🤔
              &nbsp; Do we really need a CSS Framework?
              &nbsp; How to hide your API endpoints while making an electron app?
              &nbsp; 15 underrated VSCode Themes for a change in 2019 🤷🏻‍♀️
            (Move up and down to reveal more choices)
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('author-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('author-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

function loadTimeLine() {
  document.getElementsByClassName('timeline-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('timeline-posts-console').length > 0) {
    var i = 0;
    var txt = `devto top week`
    var body = `
            ? 📚 Here are your posts:
            ❯ 21 Platforms That Serve As A Lifeline To Web Developers
              &nbsp; 20 VS Code Extensions You'll Actually Use
              &nbsp; A Developers Guide to Getting Fit
              &nbsp; Boost Your Coding Fu With Visual Studio Code and Vim
              &nbsp; The Testing Introduction I Wish I Had
              &nbsp; Code Notes, an open source code snippet manager to increase our productivity! 🚀
              &nbsp; ES6 Arrow Functions Cheatsheet
            (Move up and down to reveal more choices)
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('timeline-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('timeline-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

function loadTag() {
  document.getElementsByClassName('tag-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('tag-posts-console').length > 0) {
    var i = 0;
    var txt = `devto tag javascript`
    var body = `
            ? 📚 Here are your posts:
            ❯ Outstated - simple hooks-based state management for React
              &nbsp; Refactoring chronicles
              &nbsp; Firebase as simple database to React app
              &nbsp; 9 libraries to kickstart your Web Audio stuff
              &nbsp; How to Master Manual Testing
              &nbsp; Building Instagram/Whatsapp stories clone using Web Components 🔥
              &nbsp; 12-factor Node.js application configuration management without the 'config' npm package
              (Move up and down to reveal more choices)
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('tag-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('tag-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

function loadKeyword() {
  document.getElementsByClassName('keyword-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('keyword-posts-console').length > 0) {
    var i = 0;
    var txt = `devto search sarthology`
    var body = `
            ? 📚 Here are your posts:
            ❯ A Repo with list of ⚡️ Super Productive Movie Soundtracks 🎧
              &nbsp; How to make Dynamic Text Overlays on Images
              &nbsp; What's your 🎉New Year Resolutions🎉 ?
              &nbsp; The 10 most popular dev.to posts of 2018
              &nbsp; 🎄🎁 DEV10 🎁🎄: A Christmas Gift for the Best Community on 🌍
              &nbsp; Best Open Source Menubar Apps You Must Have 🤨
              &nbsp; Top 5 DEV Comments from the Past Week
            (Move up and down to reveal more choices)
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('keyword-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);

    setTimeout(() => {
      document.getElementsByClassName('keyword-posts-console')[0].innerHTML += body;
    }, 1000);
  }
}

// toggle tabs on codeblock
window.addEventListener("load", function () {
  // get all tab_containers in the document
  var tabContainers = getAll(".feature__item");
  var sheelContainers = getAll('.hero__terminal');

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.section__title', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick(event) {
    var scope = event.currentTarget.parentNode;

    // remove all selected tab classes
    for (var i = 0; i < tabContainers.length; i++) {
      tabContainers[i].classList.remove('selected');
    }

    for (var i = 0; i < sheelContainers.length; i++) {
      sheelContainers[i].classList.add('hide');
    }

    for (var i = 0; i < sheelContainers.length; i++) {
      if (sheelContainers[i].classList[1] === scope.classList[1]) {
        sheelContainers[i].classList.remove('hide');
        if (scope.classList[1].indexOf("top") !== -1) loadTop();
        else if (scope.classList[1].indexOf("latest") !== -1) loadLatest();
        else if (scope.classList[1].indexOf("author") !== -1) loadAuthor();
        else if (scope.classList[1].indexOf("timeline") !== -1) loadTimeLine();
        else if (scope.classList[1].indexOf("tag") !== -1) loadTag();
        else if (scope.classList[1].indexOf("keyword") !== -1) loadKeyword();
      }
    }

    // apply active classes on desired tab and pane
    scope.classList.add('selected');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this, i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if (docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function () {
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});