let tasks = [];
const ContainerItems = document.querySelector(".do_list")
document.getElementById('add_task').addEventListener('click', function (){
    let GetTask = prompt('Введите задачу');
    tasks.push(GetTask);
    AddTaskInHtml()
});

function AddTaskInHtml(){
    let tasksHTML = tasks.map((task) => {
        return `
        <div class="do_item">
            <div class="item_content">
                <p>${task}</p>
                <input type="checkbox">
            </div>
        </div>`;
    }).join("");
    ContainerItems.innerHTML = `${tasksHTML}`;
};