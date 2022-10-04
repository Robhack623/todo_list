
const todoTextBox = document.getElementById('todoTextBox')
const addButton = document.getElementById('addButton')
const pendingTasks = document.getElementById('pendingTasks')
const completedTasks = document.getElementById('completedTasks')

function success() {
    if(document.getElementById("todoTextBox").value==="") { 
           document.getElementById('addButton').disabled = true; 
       } else { 
           document.getElementById('addButton').disabled = false;
       }
   }


addButton.addEventListener('click', function(){
    
    const todoText = todoTextBox.value 
    let li = document.createElement("li")
    li.setAttribute('class', 'tasks')
    
    todoTextBox.value = '';

    //create checkbox
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.id = "checkBox"
    checkBox.setAttribute('class', 'boxcheck')
    checkBox.addEventListener('change', function() {
        if(this.checked){
            completedTasks.appendChild(li)}
        else{
        pendingTasks.appendChild(li)
            } 
        }     
    )
    li.appendChild(checkBox)
    

    //put text from input to pending tasks
    let todoTextLabel = document.createElement('label')
    todoTextLabel.innerHTML = todoText
    li.appendChild(todoTextLabel)


    //create remove button
    let removeButton = document.createElement('button')
    removeButton.className = "removeButton"
    removeButton.setAttribute('class', 'buttonremove')
    removeButton.addEventListener('click', function() {
        removeButton.parentElement.remove()
    })
    removeButton.innerHTML = 'Remove'
    li.appendChild(removeButton)


    // append the li to the pendingTasks
    pendingTasks.appendChild(li)

})

