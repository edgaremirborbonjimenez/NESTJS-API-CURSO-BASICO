import {TaskStatus} from '../task.entity';
import {IsNotEmpty, IsString, MinLength,IsOptional,IsIn} from 'class-validator'; //Validador de nestJS

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    
    @IsString()
    description: string;
}

//Los signos de ? son para que sepa que son opcionales
export class UpdateTaskDTO{
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.PENDING])
    status?:TaskStatus;
}