import { Component,OnInit} from "@angular/core";

import{Todo} from './../../models/Todo'
@Component({
    selector:'app-todos',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.css']
})
export class TodoComponent implements OnInit{

    todos!:Todo[];

    inputTodo:string  = "";
    inputTododescription:string  = "";
    constructor() {}

    ngOnInit(): void{
        this.todos = [
            {
                
                content: 'Frist Todo',
                description:'testestestrest',
                completed:false
            },
            {
                
                content:'Second todo',
                description:'testestestrest',
                completed:false
            }

        ]
    }

    toggleDone(id:number){
        this.todos.map((v, i) =>{
            if (i == id) v.completed = !v.completed;

            return v;
        })
    }
    deleteTodo (id:number){
        this.todos = this.todos.filter((v,i) => i !==id);
    }
    addTodo (){
        this.todos.push({
            content:this.inputTodo,
            description:this.inputTododescription,
            completed: false
        });
        this.inputTodo = ""
    }
}