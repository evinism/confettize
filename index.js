var confettize;
(function(){
  function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  var animStyle = '' +
    '@keyframes confetti {' +
    '  0% {' +
    '    top: 0;' +
    '    transform: rotate(0);' +
    '  }' +
    '  100% {' +
    '    top: 110%;' +
    '    transform: rotate(1600deg);' +
    '  }' +
    '}';

  // def going overboard on this.
  var confettiShapes = [
    '<svg width="10" height="10" viewbox="0 0 10 10"><polygon points="0,0 5,0 8,9"/></svg>',
    '<svg width="10" height="10" viewbox="0 0 10 10"><polygon points="1,1 7,0 6,6 0,7"/></svg>',
    '<svg width="10" height="10" viewbox="0 0 10 10"><polygon points="0,0 6,6 9,0"/></svg>',

  ];

  var colorList = [
    "blue",
    "red",
    "pink",
    "orange",
    "purple",
    "lightblue",
  ];

  var confettiContainer;
  var stylesheetMade = false;
  confettize = function confettize(target){
    confettiContainer = target;
    if(!stylesheetMade){
      makeAnimStylesheet();
      stylesheetMade = true;
    }
    var confettiLikelihood = 0.15;
    setInterval(function(){
      if (!document.hidden && Math.random() < confettiLikelihood){
        makeAConfetti();
      }
    }, 10);
  }

  function makeAnimStylesheet(){
    var stylesheet = document.createElement('style');
    stylesheet.innerHTML = animStyle;
    document.head.append(stylesheet);
  }

  function makeAConfetti(){
    var confettiBaseSpeed = 25;
    var shapeIdx = Math.floor(Math.random() * confettiShapes.length);
    var shape = document.createElement('div');
    var animSpeed = Math.floor(Math.random() * confettiBaseSpeed / 2 + confettiBaseSpeed / 2);

    shape.innerHTML = getRandom(confettiShapes);
    shape.style.position = 'absolute';
    shape.style.top = 60;
    shape.style.left = Math.floor(Math.random() * 100) + '%';
    shape.style.fill = getRandom(colorList);
    shape.style.width = (confettiBaseSpeed / (animSpeed)) * 13;
    shape.style.animation = 'confetti ' + animSpeed + 's linear';
    confettiContainer.appendChild(shape);
    shape.addEventListener('animationend', function(){
      shape.remove();
    });
  }
}());
