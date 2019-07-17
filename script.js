// make clickable buttons
let buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3')
];

//add event handler for buttons
buttons[0].onclick = function() {
  clicked(0);
};
buttons[1].onclick = function() {
  clicked(1);
};
buttons[2].onclick = function() {
  clicked(2);
};
buttons[3].onclick = function() {
  clicked(3);
};



//increase scores

let current = 0; // current active button-round
let score = 0; // score;
let pace = 1500; // our speed of the game;

function clicked(i) {
  console.log('clicked', i);
  if (i !== current) {
    console.log('ups!');
  } else {
    score++;
    pace = pace - 10;
    document.getElementById('score').innerHTML = score;
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickNext() {
  let next = pickNew(current);

  buttons[current].style.backgroundColor = 'grey';
  buttons[next].style.backgroundColor = 'green';

  current = next;
  console.log('current', current);

  timer = setTimeout(pickNext, pace);

  function pickNew(previous) {
    let next = getRndInteger(0, 3);
    if (next != previous) {
      return next;
    } else {
      return pickNew(previous);
    }
  }
}
