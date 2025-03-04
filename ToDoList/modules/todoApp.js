export class TodoApp{
    //构造函数
    constructor(){
        //直接在构造函数里声明
        this.todoList=document.getElementById('todoList');

        //document代表整个网页
        //getElementByID：找到id为‘ ’中的html元素
        //this.addListBtn=document.getElementById('addList');
        this.addTaskBtn=document.getElementById('taskBtn');

        //this.addListBtn.addEventListener('click',()=>this.addList());
        this.addTaskBtn.addEventListener('click',()=>this.addTask());
    }

    addTask(){
        //创建新的<li>元素
        const newTask=document.createElement('li');
        
        //创建输入框
        const inputField=document.createElement('input');
        inputField.type='text';
        inputField.placeholder='输入任务后回车';
        
        //监听输入框的回车事件
        inputField.addEventListener('keypress',(event)=>{
            if(event.key==='Enter'){
                const taskText=inputField.value.trim();
            }
        })

        newTask.appendChild(inputField);
        this.todoList.appendChild(newTask);
    }
}