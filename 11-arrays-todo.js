const arrayTodo=[];
displayTodo();
function displayTodo()
{
  let storehtml='';
  for(let i=0;i<arrayTodo.length;i++)
  {
    const storeObj=arrayTodo[i];
    const task=storeObj.name;
    const dueDate=storeObj.dueDate;
    storehtml+= `
    <div>
    <p class="css-task-name">
    ${task} 
    </p>
    </div>
    <div>
    <p>
    ${dueDate}
    <p>
    </div>
    <button onclick="
    arrayTodo.splice(${i},1);
    displayTodo();
    " class="css-delete-button">
    Delete
    </button>`;
  }
  const tasksCont = document.querySelector('.tasks-cont');
  tasksCont.innerHTML=storehtml;
}

function addTolist()
{
  console.log('fun');
  const taskElement=document.querySelector('.js-input');
  const inputvalue=taskElement.value;
  const dateElement=document.querySelector('.js-input-date');
  const dueDatevalue=dateElement.value;
  if(taskElement.value==='')
  {
    taskElement.classList.add('css-error');
  }
  if(dateElement.value==='')
  {
    dateElement.classList.add('css-error');
  }
  if(taskElement.value!=''&&dateElement.value!=''){
    if(taskElement.classList.contains('css-error'))
    {
      taskElement.classList.remove('css-error');
    }
    if(dateElement.classList.contains('css-error'))
    {
      dateElement.classList.remove('css-error');
    }
      arrayTodo.push({name: inputvalue,dueDate: dueDatevalue });
      taskElement.value='';
      dateElement.value='';
      displayTodo();
  }
}

function enterKeypressed(event)
{
  if(event.key==='Enter')
  {
    addTolist();
  }
}

function checkTask()
{
  const taskElement=document.querySelector('.js-input');
  if(taskElement.value!=='')
  {
    taskElement.classList.remove('css-error');
  }
}

function checkDate()
{
  const dateElement=document.querySelector('.js-input-date');
  if(dateElement.value!=='')
  {
    dateElement.classList.remove('css-error');
  }
}
