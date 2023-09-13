const date        = document.querySelector('#date');
const list        = document.querySelector('#list');
const input       = document.querySelector('#input');
const buttonEnter = document.querySelector('#button_enter');
const buttonSave  = document.querySelector('#button_save');

//Fecha actualizada 
const FECHA = new Date ()
date.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})


//Agregar tarea
let taskNumber = 0;
function addTask (taskContent){
    taskNumber++;
    const elementHTML = `<li id="element"> <p class="task" id="task-${taskNumber}">${taskContent}</p>
                          <div id="task_accions"> 
                                <i class="far fa-circle co accion" data="done" class="done_button"></i>
                                <i class="fas fa-trash de accion" data="removed" class="remove_button"></i> 
                           </div> 
                    </li>`;
    list.insertAdjacentHTML("beforeend", elementHTML);

    // array[n]  
    return list.childNodes[  list.childNodes.length - 1 ];
}
//Llamar a la funcion
buttonEnter.addEventListener('click', () =>{
    const Task = input.value;
    if(Task){
        const latestAddedTask = addTask(Task);
        console.log(latestAddedTask)
        latestAddedTask.querySelector('[data="done"]').addEventListener('click', event => { //marcar la tarea como realizada
            latestAddedTask.querySelector('.task').classList.toggle('line_through');
        });
        //Eliminar tarea
        latestAddedTask.querySelector('[data="removed"]').addEventListener('click', event => {
            latestAddedTask.remove();
        })
    };
})
