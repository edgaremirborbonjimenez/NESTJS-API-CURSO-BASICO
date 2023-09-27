import { Injectable } from '@nestjs/common';
import {Task,TaskStatus} from './task.entity';
import {v4} from 'uuid'; //Dependencia para generar un id 
import { UpdateTaskDTO } from './dto/task.dto';
@Injectable()
export class TasksService {

    //Propiedad privada contiene las tareas almacenadas
private tasks:Task[] =  [{
    id: '1',
    title: 'First Task',
    description: 'some task',
    status: TaskStatus.PENDING,
}];

    getAllTasks(){
        return this.tasks;
    }
    createTask(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);
        return task;
    }
    deleteTask(id: string){
   this.tasks = this.tasks.filter(task=> task.id !== id); //Filtra el arreglo regresando un arreglo de Task que no contendan el id
    }

    getTaskById(id: string): Task{
       return this.tasks.find(task=> task.id===id);
    }
    updateTask(id:string, updatedFields: UpdateTaskDTO):Task{
const task = this.getTaskById(id);
    const newTask =  Object.assign(task,updatedFields); //Conbina las propiedades si tienen propiedades similares lo reemplaza el primero con el segundo
        this.tasks = this.tasks.map(task=> task.id === id ? newTask: task); //Actualiza el arreglo cambiando el valor de la tarea actualizada
        return newTask;
    }

}
