export class List{
    //构造函数
    constructor(){
        //直接在构造函数里声明
        this.todoList=document.getElementById('todoList');

        //document代表整个网页
        //getElementByID：找到id为‘ ’中的html元素
        this.addTaskBtn=document.getElementById('taskBtn');
        this.addTaskBtn.addEventListener('click',()=>this.addTask());

        this.listName;
        this.taskDate;
        this.taskDisc;
    }

    addTask(){
        //创建新的<li>元素
        const newTask=document.createElement('li');
        
        //创建复选框
        const checkBox=document.createElement('input');
        checkBox.type="checkbox";


        //创建输入框
        const inputField=document.createElement('input');
        inputField.type='text';
        inputField.placeholder='Click here to input the task';

        //创建删除键
        const deleteBtn=document.createElement("button");
        deleteBtn.id="deleteBtn";
        deleteBtn.textContent="delete"
        //添加一个删除函数 使用removeChild来删除
        deleteBtn.addEventListener('click',function(){
            todoList.removeChild(newTask);
        });
        
        //监听输入框的回车事件
        inputField.addEventListener('keypress',(event)=>{
            if(event.key==='Enter'){
                const taskText=inputField.value.trim();
            }
        })


        newTask.appendChild(checkBox);
        newTask.appendChild(inputField);
        newTask.appendChild(deleteBtn);

        this.todoList.appendChild(newTask);
    }
}