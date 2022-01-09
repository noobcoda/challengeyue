const listsContainer = document.getElementById('allTasks');
const newListForm = document.getElementById("data_new_list_form");
const newListInput = document.getElementById("data_new_list_input");

function formSubmit(e){
    e.preventDefault(); //when enter, won't refresh whole page
    const listName = newListInput.value;
    if (listName == null || listName === "") return 
    const list = createList(listName)
    newListInput.value = null;
    lists.push(list)
}

function render(){
    console.log(listsContainer);
    console.log(newListForm);
    console.log(newListInput);
    clearElement(listsContainer);
    lists.forEach(list => {
        const listElement = document.createElement("li");
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement);
    })
}

function clearElement(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}


function createList(name){
    return {
        id:Date.now().toString(),
        name:name,
        tasks=[]
    }
}