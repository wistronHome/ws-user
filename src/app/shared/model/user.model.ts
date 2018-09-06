/**
 * Created by guanyj on  2018/9/6
 */
import {Role} from './role.model';


export class User {
    id: string;
    userName: string;
    email?: string;
    role: Role;
}
