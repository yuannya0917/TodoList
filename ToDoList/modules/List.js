export class List{
    //构造函数
    constructor(listName,listDisc){
        //直接在构造函数里声明
        this.todoList=document.getElementById('todoList');

        this.listName=listName;
        this.listDisc=listDisc;
        //将info内的name和disc修改成传入的参数
        document.getElementById("listName").value=this.listName;
        document.getElementById("listDisc").value=this.listDisc;

        //todolist中的taske列表
        this.taskList=[{text:"",completed:false}];
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
        
        newTask.appendChild(checkBox);
        newTask.appendChild(inputField);
        newTask.appendChild(deleteBtn);

        this.todoList.appendChild(newTask);
    }

    render(){
        this.taskList.forEach((task)=>{
            console.log(task.text);
            console.log(task.completed);
        })
        this.taskList.forEach((task)=>{
            const li=document.createElement("li");

            //创建复选框
            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            checkbox.checked=task.completed;
            
            //创建输入文本框
            const inputField=document.createElement("input");
            inputField.placeholder='Click here to input the task';
            inputField.type='text';
            inputField.value=task.text;

            //创建删除键
            const deleteBtn=document.createElement("button");
            deleteBtn.id="deleteBtn";
            deleteBtn.textContent="delete"
            //添加一个删除函数 使用removeChild来删除
            deleteBtn.addEventListener('click',function(){
                todoList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(inputField);
            li.appendChild(deleteBtn);

            this.todoList.appendChild(li);
        })
    }
}