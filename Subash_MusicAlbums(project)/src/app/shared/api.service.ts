import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) 
  {

  } 
  postMusics(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(
      map((response:any)=> {
        return response;
        }
      )
    );  
  }

  getAllMusic()
  {
    return this.http.get<any>("http://localhost:3000/posts").pipe(
      map((response:any)=> {
        return response;
        }
      )
    );  
  }

  

  deleteMusic(data:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"  + data).pipe(
      map((response:any)=> {
        return response;
        }
      )
    );  
  }

  updateMusic(data:any, id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(
      map((response:any)=> {
        return response;
        }
      )
    );  
  }
}
