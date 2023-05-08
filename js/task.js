let listTask = []
const objTask = {
    id: '',
    nombre: ''
}




const $formulario = document.getElementById('createtask')
const $btnSubmit = document.getElementById('addtask')
const $input = document.getElementById('entradanombre')



/*Borra la tarea */

const deleteTask = (id) => {
    listTask = listTask.filter(task => task.id !== id);
    clear();
    showTask();
    
}








/*Clear sirve para evitar la duplicación de tareas siempre eliminando el primer hijo y siguiendo con el otro */
const clear = () => {
    const $divTask2 = document.querySelector('.listtask')
    while($divTask2.firstChild){
        $divTask2.removeChild($divTask2.firstChild)
    }
}







/*Valida el formulario (La validación la hago en HTML con el atributo Required), además de agregar los atributos al objeto */

const validateForm = e => {

    e.preventDefault()
    objTask.id = Date.now();
    objTask.nombre = $input.value
    addTask();
}









/*Añadimos la tarea a un array a partir de un push con el operador spread, para copiar cada uno */

const addTask = () => {
    listTask.push({...objTask})
    showTask();

    $formulario.reset()

    clearObject()
}











/*Limpiar el input a la hora de enviar una nueva tarea */

const clearObject = () => {
    $input.value = ''
}











/*Muestra las tareas, primero se crea el lugar donde queremos mostrar las tareas la cual es $divTask, lo siguiente es traernos las tareas y destructurarlas para que solo coja una por una su id y nombre, luego creamos un parrafo donde almacenaremos esos datos, para después crear un botón y luego agregar el botón y el parrafo con el appendChild al div principal */


const showTask = () => {
    clear()

    const $divTask = document.querySelector('.listtask')

    listTask.forEach(task => {
        const {id, nombre} = task

        const parrafo = document.createElement('p')
        parrafo.textContent = `${nombre}`
        parrafo.dataset.id = id
        parrafo.classList.add('bg-dark')
        parrafo.classList.add('text-light')

        parrafo.style.padding = '10px'

        /*Boton de eliminar Tarea */
        const deleteBtnTask = document.createElement('button');
        deleteBtnTask.textContent = "Eliminar"
        deleteBtnTask.classList.add('btn', 'btn-danger')
        deleteBtnTask.style.margin = '10px'
        deleteBtnTask.onclick = () => deleteTask(id);
        parrafo.append(deleteBtnTask)

        const line = document.createElement('hr')

        $divTask.appendChild(parrafo)
        $divTask.appendChild(line)

        

    })
}




/*Llamada función */


$formulario.addEventListener('submit', validateForm)