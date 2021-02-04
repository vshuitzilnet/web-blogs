import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:300/api/"

  header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  constructor(private http: HttpClient) { }

  getUsers(){
    

    return this.http.get(this.url + 'users', {
        headers: this.header
    });
  }

  getUser(id:any){
  
    return this.http.get(this.url + 'user/' + id, {headers:this.header}); 

  }

  postUser(user:any){
    console.log("Posting user: " + JSON.stringify(user) );
    

    return this.http.post(this.url + 'logup/', user);
    
  }

  loginUser(user:any){
    return this.http.post(this.url + 'login/', user, {headers:this.header});
  }

  deleteUser(id:any){
    console.log("User deleting: " + id );

    return this.http.delete(this.url + 'user/' + id, {headers:this.header}); 
  }

  putUser(id:any){
    return this.http.put(this.url + 'user/' + id, {headers:this.header}); 
  }


}
