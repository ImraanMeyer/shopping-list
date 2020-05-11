// Create a "close" button and append it to each list item
var listOfItems = document.getElementsByTagName("LI");

for (let i = 0; i < listOfItems.length; i++) {
    var span = document.createElement("SPAN");
    span.className = "close";
    span.innerHTML = '\u00D7';
    // Append X to each List Item
    listOfItems[i].appendChild(span);
}


// Click on a close button to hide the current list item
var closeButtons = document.getElementsByClassName("close");

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/**
 * The above for loops can be deleted.
 * 
 * They are only present to cater for the hardcoded <li> elements in the HTML
 */



// Add a 'checked' class when clicking on a list item
var listOfItems = document.querySelector('ul');

listOfItems.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
})


// Create a new list item when clicking on the "Add" button
function createNewShoppingListItem() {

    var li = document.createElement('li');
    var userInput = document.getElementById('input').value;

    li.innerHTML = userInput;

    if (userInput === '') {
        alert('Please insert an item!')
    } else {
        document.getElementById('listOfItems').appendChild(li);
    }
    // Reset input field
    document.getElementById('input').value = ""

    // Add a X to the new LI element
    var span = document.createElement("SPAN");
    span.className = "close";
    span.innerHTML = '\u00D7';

    li.appendChild(span);

    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}