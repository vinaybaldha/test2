// Create an empty array to store the to-do items
const toDoList = [];

// Add a function to add a new item to the to-do list
function addToDoItem(item) {
  toDoList.push(item);
}

// Add a function to remove an item from the to-do list
function removeToDoItem(item) {
  toDoList.splice(toDoList.indexOf(item), 1);
}

// Add a function to mark an item as complete
function markToDoItemComplete(item) {
  item.completed = true;
}

// Add a function to display the to-do list
function displayToDoList() {
  console.log("To-do list:");
  toDoList.forEach((item) => {
    console.log(`- ${item.text} ${item.completed ? "(completed)" : ""}`);
  });
}

// Add some sample to-do items
addToDoItem("Write a blog post");
addToDoItem("Clean the house");
addToDoItem("Go to the gym");

// Display the to-do list
displayToDoList();

// Remove an item from the to-do list
removeToDoItem("Clean the house");

// Mark an item as complete
markToDoItemComplete("Write a blog post");

// Display the to-do list again
displayToDoList();
