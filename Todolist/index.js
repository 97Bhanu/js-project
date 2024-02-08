function addtolist(){
  var taskname=document.getElementById('taskname').value
  var tododiv=document.getElementById('mytodo')

  var newtodoitem=document.createElement('div')

  var newtodoitem=document.createElement('li')
  todoname.innerHTML= taskname

  var  deletebtn = document.createElement('i')
  deletebtn.classList.add('fas')
  deletebtn.classList.add('fa-trash-alt')

  newtodoitem.appendChild(todoname)
  newtodoitem.appendChild(deletebtn)

  tododiv.appendChild(newtodoitem)
}
