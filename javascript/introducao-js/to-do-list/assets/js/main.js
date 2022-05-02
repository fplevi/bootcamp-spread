/* const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}
 */

/* Não conseguir desenvolver a solução sozinho, acabei copiando todo o código, então tentei entender o que fazia cada linha */

const form = document.getElementById('task-form'); //guarda o valor do formulário
const taskList = document.getElementById('tasks'); //container para os elementos criados

//o "e" para mim é uma dúvida ainda, mas acredito que deva ser para restaurar o valor para o placeholder padrão após o submit
form.onsubmit = function(e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input'); //armazena o valor que vem do inputfild
    addTask(inputField.value); //coloca o valor do inputfild dentro da função addtask
    form.reset(); //reseta o form?
};

function addTask(description){
   /*  var count = 1; //contador que n funcionocou como eu esperava
    var idItem = "Item-" + count; //tentativa de inumerar os items como um id único numerado */
    const taskContainer = document.createElement('div'); //cria uma div
    const newTask = document.createElement('input'); //cria um input
    const taskLabel = document.createElement('label'); // cria um label
    const taskDescriptionNode = document.createTextNode(description) //adicionar um texto no html

    newTask.setAttribute('type', 'checkbox'); //seta o atributo type="checkbox" para o input
    newTask.setAttribute('name', description); //seta o atributo name com o valor do inputfield para o input
    newTask.setAttribute('id', description); //seta o atributo id com o valor do inputfield para o input

    taskLabel.setAttribute('for', description); //seta o atributo for com o valor do inputfield para a label
    taskLabel.appendChild(taskDescriptionNode); //Inseri o valor da descrição para dentro das tags label

    taskContainer.classList.add('task-item'); //adiciona a classe task-item a nova div adicionada
    taskContainer.appendChild(newTask); //declara o input como filho dessa div
    taskContainer.appendChild(taskLabel); //declara o label como filho dessa div

    taskList.appendChild(taskContainer);  //declara a div criada como filha da div existente no html
    /* count++ */
}