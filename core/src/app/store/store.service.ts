import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  formData  = new BehaviorSubject({
    email: '',
    password: ''
  })

  userName = new BehaviorSubject('Игорь')
}