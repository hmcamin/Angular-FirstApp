import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {
  }
  saveData(){
    return this.http.get('url').subscribe(data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }

}
