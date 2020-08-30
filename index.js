const taskCard = document.querySelector('.task-card') //task card in container
const form = document.querySelector('#create-task-form')
const ul = document.getElementById('tasks')


const listenForSubmit = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = document.getElementById('description').value
    const li = document.createElement('li')
    li.innerHTML += `
      ${newTask}
      <button class="btn-danger" data-delete="delete">Delete</button>
      <button class="btn-success" data-edit="edit">Edit</button> 
      <hr>
      `
    ul.appendChild(li)
    form.reset()

  }) 
}//end of submit function

listenForSubmit()

const listenForEditOrDelete = () => {
  ul.addEventListener('click', (e) => {
    if(e.target.dataset.delete === 'delete'){
      e.target.parentNode.remove()
    } else if(e.target.dataset.edit === 'edit'){
      form[0].value = e.target.parentNode.innerText.split(' ')[0]
      form[1].value = 'Edit'
      form.addEventListener('submit', (e) => {
        console.log('edit')
      })
      
    }
    // debugger
  })
}
listenForEditOrDelete()


const listenForCreateOrEdit = () => {
  if(form[1].innerHTML = "Edit"){
    listenForEditOrDelete
  } else {
    form[1].innerHTML = "Create New Task"
    listenForSubmit
  }
}
listenForCreateOrEdit()
