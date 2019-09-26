const addTodo = () => {
  // Select what is inside the input element: task typed
  const task = document.querySelector('#task').value;
  
  const deletebtn = document.createElement('button');
deletebtn.innerText = 'delete'
  // create a list tag : <li></li>
  const todo = document.createElement('li');
   
  //insert the fetched value from user into the li tag created above
  // <li>{task}</li>
  todo.innerHTML = task;

  // get the parent of the list which  is in the html doc: <ol></ol>
  const todos = document.getElementById('todos');

  // Add the created list above with text to the todos list
/* 
  <ol>
   <li>{task}<li>
  </ol>
  */
  todos.appendChild(todo);
};



// Get the button
const adderBtn = document.getElementById('adder');

// listen to click from user
adderBtn.addEventListener('click', addTodo);




/* const todo= {

}

todo.innerText = "kjngndf"

{
  innerText : 'kjngndf'
}


<input value="wetin uhviriirhriierigfgggfdey" type="text" name="task" id="task" />

const input = {
    type: 'text',
    value: 'iubivoijor',
    name: 'adder',
    id: 'mdofj'
}

input.value
input['value'] */