var task = document.getElementById('value');
var taskContainer = document.getElementById('list');
var listContainer = document.createElement('ol');

function add() {
    Main(task.value);
    task.value = '';
}

function Main(element) {
    var list = document.createElement('li');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    var editField = document.createElement('input');
    var submitEditBtn = document.createElement('button');

    deleteBtn.addEventListener('click', function() {
        list.remove();
        editField.remove();
        submitEditBtn.remove();
    })

    editBtn.addEventListener('click', function() {
        editField.setAttribute('type', 'text');
        editField.value = element;

        submitEditBtn.textContent = 'Ok';

        taskContainer.appendChild(editField);
        taskContainer.appendChild(submitEditBtn);
    })

    submitEditBtn.addEventListener('click', function() {
        list.textContent = editField.value;

        editField.remove();
        submitEditBtn.remove();

        list.appendChild(deleteBtn);
        list.appendChild(editBtn);
    })

    deleteBtn.style.cssFloat = 'right';
    editBtn.style.cssFloat = 'right';

    list.textContent = element;

    if (list.textContent.length == 0) {
        alert('Nothing to add');
        return null
    }

    deleteBtn.textContent = 'Remove';
    editBtn.textContent = 'Edit';

    listContainer.appendChild(list);
    taskContainer.appendChild(listContainer);
    list.appendChild(deleteBtn);
    list.appendChild(editBtn);
}

