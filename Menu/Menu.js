/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*Step 1: Write a function that will create a menu component as seen below. Pass the function an array as it's only argument.
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

const header = document.querySelector(".header");
const menuDiv = document.createElement("ul");
const menuBtn = document.querySelector(".menu-button")

function createMenu(array) {
   
  //appending children
  header.appendChild(menuDiv);
  // menuDiv.appendChild(menuList);

  //add classes
  menuDiv.classList.add('menu')
  // menuList.classList.add("menu")

  /*Step 2: Iterate over the array creating a list item <li> element for each item in the array. Add those items to the <ul> */
  array.forEach(element => {
    let newNavItem = document.createElement("li")
    newNavItem.textContent = element;
    menuDiv.appendChild(newNavItem);
  });

  return menuDiv
}

// createMenu(menuItems);
header.appendChild(createMenu(menuItems));

/*Step 3: Using a DOM selector, select the menu button currently on the DOM.*/
menuBtn.addEventListener("click", e => {
  menuDiv.classList.toggle(".menu--open")
})

/*Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself */


//Step 5: return the menu component.

//Step 6: add the menu component to the DOM.