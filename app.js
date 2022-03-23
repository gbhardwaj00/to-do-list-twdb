//List of Todos 
let list = [];

//action will store the usre command
let action = prompt("Enter an action to proceed:");

//runs again and again until user puts inputs 'quit'
while (action !== 'quit') {
    //while input is not valid and not 'quit', get correct input
    while (action !== "new" && action !== "list" && action !== "delete") {
        action = prompt("Not valid, please enter a valid action.");
    }
    //prints the list
    if (action === 'list') {
        //in case of an empty list
        if (list.length === 0) {
            console.log("List is Empty!");
        }
        //prints the list 
        else {
            console.log("*************");
            for (let i = 0; i < list.length; i++) {
                console.log(`${i}:   ${list[i]}`);
            }
            console.log("*************");
        }
    }
    //adds a task to the list
    else if (action === 'new') {
        let task = prompt("What would you like to add?");
        list.push(task.toUpperCase());
        console.log(`'${task}' has been added to the Todo list!`);
    }
    //deletes the task at a user-specified index
    else if (action === 'delete') {
        if (list.length === 0) {
            console.log("List is Empty!");
        }
        else {
            let index = parseInt(prompt("Which index would you like to delete?"));
            if (!index) {
                console.log('Unknown index!');
            }
            else {
                console.log(`'${list[index]}' has been deleted from the Todo list!`);
                list.splice(index, 1);
            }
        }   
    }
    //prompt user for the next action
    action = prompt("Enter an action to proceed:");
}

console.log("Quitting.....");







