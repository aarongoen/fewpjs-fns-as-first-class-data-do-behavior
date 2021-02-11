/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

let time = '15:31'

function greet(time) {
  let splitTime = time.split(':')[0];
  if (splitTime < 12) return 'Good Morning';
  if ((splitTime > 12) && (splitTime < 17)) return 'Good Afternoon';
  return 'Good Evening';
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById('greeting').innerText = str;
}
