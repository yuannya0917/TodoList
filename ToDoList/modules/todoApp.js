import { List } from "./List.js";
export class todoApp{
    constructor(){
        //左下侧list栏相关
        this.listsList=document.getElementById("listul")

        this.addListBtn=document.getElementById("ListBtn");
        this.addListBtn.addEventListener('click',()=>this.addList());

        //右侧
        this.todoList=document.getElementById("todoList");
        //lists数组，存储每个list的名称和描述
        //错误写法 this.lists=[List,{listName,disc}];
        this.lists=[];

        this.listNameInput=document.getElementById("listName");
        this.listDiscInput=document.getElementById("listDisc");
        
        this.nowListIndex;
        this.addTaskBtn=document.getElementById("taskBtn");
        this.addTaskBtn.addEventListener("click",()=>{this.lists[this.nowListIndex].addTask()});

        

        this.listNameInput.addEventListener("input",()=>{
            //这里必须要用其他的变量存储listName的值，如果直接用listNameInput是不行的！！！
            if(this.nowListIndex!==null&&this.lists[this.nowListIndex]){
                this.lists[this.nowListIndex].listName=this.listNameInput.value;
                this.renderList();
                console.log("listNameInput有活动，修改的是index为"+this.nowListIndex+"的名称,此时listName为"+this.lists[this.nowListIndex].listName);
            }
        });

        this.listDiscInput.addEventListener("input",()=>{
            if(this.nowListIndex!==null&&this.lists[this.nowListIndex]){
                this.lists[this.nowListIndex].listDisc=this.listDiscInput.value;
            }
        })

    }

    addList(){
        //初始化列表名称和描述
        const newList=new List("none","none");
        this.lists.push(newList);

        //每次添加新list都要重新渲染一次
        this.renderList();

    }

    removeList(index){
        //将索引list删除
        this.lists.splice(index,1);

        //渲染
        this.renderList();
    }

    saveCurrentTodoList(){
        if(this.lists[this.nowListIndex]){
            const liElements=this.todoList.children;
            for(let i=0;i<liElements.length;i++){
                const li=liElements[i];
                this.lists[this.nowListIndex].taskList.push({
                    text:li.querySelector("input[type='text']").value,//获取文本框内容
                    completed:li.querySelector("input[type='checkbox']").checked
                });
            }

            this.lists[this.nowListIndex].taskList.forEach((task)=>{
                console.log(task.text);
                console.log(task.completed);
            })
        }

        
    }

    //用于维护右下部分，即该list中的task列表
    renderListBody(index){
        //注意这里是将value值赋值！
        this.listNameInput.value=this.lists[index].listName;
        this.listDiscInput.value=this.lists[index].listDisc;

        //更新HTML内容
        document.getElementById("listName").textContent=this.listName;
        document.getElementById("listDisc").textContent=this.listDisc;

        this.lists[index].render();
    }

    //用于维护左下部分，即所有list的列表
    renderList(){
        this.listsList.innerHTML="";//清空列表

        //遍历整个lists数组
        this.lists.forEach((list,index)=>{
            const li=document.createElement("li");

            //任务文本
            const newList=document.createElement("button");
            newList.addEventListener("click",()=>{
                //重点检查这里！！！！
                this.todoList.innerHTML="";
                this.saveCurrentTodoList();
                this.renderListBody(index);
                this.nowListIndex=index;
            })
            newList.textContent=list.listName;

            //删除按钮
            const deleteBtn=document.createElement("button");
            deleteBtn.textContent="Delete";
            deleteBtn.addEventListener("click",()=>this.removeList(index));
            
            //组装元素
            li.appendChild(newList);
            li.appendChild(deleteBtn);
            this.listsList.appendChild(li);

            //text
        })
    }
}