// ========================================================== \\
// ========================= J I M ========================== \\
// ========== Javascript Interactive Microlibrairy ========== \\
// ========================================================== \\
// ============= https://github/philippebeck/jim ============ \\
// ========================================================== \\



// Strict mode
'use strict';



// ******************* \\
// ***** SUMMARY ***** \\
// ******************* \\



// 1 - Helpers  => the utilities functions
// 2 - Events   => the user events
// 3 - Main     => the main code



// *********************** \\
// ***** 1 - HELPERS ***** \\
// *********************** \\



/*****************************\
* Gets a random whole number
* @param   {Number} min => the minimum value accept for the random integer
* @param   {Number} max => the maximum value accept for the random integer
* @returns {Number}     => the random integer
*/
function getRandomInteger(min, max)
{
  // Returns a random integer between the min & the max values
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



/*********************************\
* Installs an Event Listener
* @param {String}          selector  => the CSS selector
* @param {String}          type      => the event type
* @param {Object|Function} listener  => the event listener
*/
function installEventListener(selector, type, listener)
{
  // Creates the element empty
  var element;

  // Selects, gets & stores the first DOM object matching to the selector
  element = document.querySelector(selector);

  // Installs an Event Listener on this DOM object
  element.addEventListener(type, listener);
}



// ********************** \\
// ***** 2 - EVENTS ***** \\
// ********************** \\



/****************************************\
 * Toggle the none class on the help list
 */
function onClickHelp()
{
  // Gets the jim help element to toggle the none class
  document.getElementById('jim-help').classList.toggle('none');
}



/*********************************************************\
 * Chooses the function to execute from the keyboard event
 * @param {Object} event => the keyboard event
 */
function onKeydown(event)
{
  // Gets the keycode, then stores it
  var keyCode = event.which;

  // Checks which action matches with the current keycode
  switch (keyCode)
  {
    case 65: keyA();
    break;

    case 66: keyB();
    break;

    case 67: keyC();
    break;

    case 68: keyD();
    break;

    case 69: keyE();
    break;

    case 70: keyF();
    break;

    case 71: keyG();
    break;

    case 72: keyH();
    break;

    case 73: keyI();
    break;

    case 74: keyJ();
    break;

    case 75: keyK();
    break;

    case 76: keyL();
    break;

    case 77: keyM();
    break;

    case 78: keyN();
    break;

    case 79: keyO();
    break;

    case 80: keyP();
    break;

    case 81: keyQ();
    break;

    case 82: keyR();
    break;

    case 83: keyS();
    break;

    case 84: keyT();
    break;

    case 85: keyU();
    break;

    case 86: keyV();
    break;

    case 87: keyW();
    break;

    case 88: keyX();
    break;

    case 89: keyY();
    break;

    case 90: keyZ();
    break;

    // Gets the jim help element to toggle the none class
    default:
    document.getElementById('jim-help').classList.toggle('none');
  }
}



// ******************** \\
// ***** 3 - MAIN ***** \\
// ******************** \\



// Waits the complete loading of the page
document.addEventListener('DOMContentLoaded', function(e)
{
  // Adds listeners on the keyboard
  installEventListener('#access', 'keydown', onKeydown);

  // Adds listener on the help button
  installEventListener('#help-btn', 'click', onClickHelp);
});
