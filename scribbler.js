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
    var txt = `devto
  
            ? 📚 Here are your posts:
            >  1) git-history
              2) I Quit My Software Project To Get Healthy!
              3) Advanced array manipulation in JavaScript 🧐
              4) #amaI'm Danny de Vries, Web development lecturer at the Amsterdam University, Ask Me Anything!
              5) Useful CSS Media Query Features
              6) I Promise this is a practical guide to Async / Await
            (Move up and down to reveal more choices)
              Answer:
              `;
    var speed = 10;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName('top-posts-console')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 300);
  }
}

function loadLatest() {
  document.getElementsByClassName('latest-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('latest-posts-console').length > 0) {
    var i = 0;
    var txt = `devto latest
  
            ? 📚 Here are your posts:
            >  1) git-history
              2) I Quit My Software Project To Get Healthy!
              3) Advanced array manipulation in JavaScript 🧐
              4) #amaI'm Danny de Vries, Web development lecturer at the Amsterdam University, Ask Me Anything!
              5) Useful CSS Media Query Features
              6) I Promise this is a practical guide to Async / Await
            (Move up and down to reveal more choices)
              Answer:
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
  }
}

function loadAuthor() {
  document.getElementsByClassName('author-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('author-posts-console').length > 0) {
    var i = 0;
    var txt = `devto author sarthology

            ? 📚 Here are your posts:
            >  1) git-history
              2) I Quit My Software Project To Get Healthy!
              3) Advanced array manipulation in JavaScript 🧐
              4) #amaI'm Danny de Vries, Web development lecturer at the Amsterdam University, Ask Me Anything!
              5) Useful CSS Media Query Features
              6) I Promise this is a practical guide to Async / Await
            (Move up and down to reveal more choices)
              Answer:
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
  }
}

function loadTimeLine() {
  document.getElementsByClassName('timeline-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('timeline-posts-console').length > 0) {
    var i = 0;
    var txt = `devto top week

            ? 📚 Here are your posts:
            >  1) git-history
              2) I Quit My Software Project To Get Healthy!
              3) Advanced array manipulation in JavaScript 🧐
              4) #amaI'm Danny de Vries, Web development lecturer at the Amsterdam University, Ask Me Anything!
              5) Useful CSS Media Query Features
              6) I Promise this is a practical guide to Async / Await
            (Move up and down to reveal more choices)
              Answer:
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
  }
}

function loadTag() {
  document.getElementsByClassName('tag-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('tag-posts-console').length > 0) {
    var i = 0;
    var txt = `devto tag javascript

            ? 📚 Here are your posts:
            >  1) git-history
              2) I Quit My Software Project To Get Healthy!
              3) Advanced array manipulation in JavaScript 🧐
              4) #amaI'm Danny de Vries, Web development lecturer at the Amsterdam University, Ask Me Anything!
              5) Useful CSS Media Query Features
              6) I Promise this is a practical guide to Async / Await
            (Move up and down to reveal more choices)
              Answer:
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
  }
}

function loadKeyword() {
  document.getElementsByClassName('keyword-posts-console')[0].innerHTML = '';
  if (document.getElementsByClassName('keyword-posts-console').length > 0) {
    var i = 0;
    var txt = `devto search sarthology

            ? 📚 Here are your posts:
            >  1) A Repo with list of ⚡️ Super Productive Movie Soundtracks 🎧
              2) How to make Dynamic Text Overlays on Images
              3) What's your 🎉New Year Resolutions🎉 ?
              4) The 10 most popular dev.to posts of 2018
              5) 🎄🎁 DEV10 🎁🎄: A Christmas Gift for the Best Community on 🌍
              6) Best Open Source Menubar Apps You Must Have 🤨
            (Move up and down to reveal more choices)
              Answer:
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