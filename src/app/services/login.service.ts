import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.models';

//const {apiTrainers, apikey} = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_TRAINERS = 'https://noroff-api-production-c63f.up.railway.app/trainers'
  API_KEY = 'SECRET'

  //Dependency Injection
  constructor(private readonly http: HttpClient) { }
  

  public login(username: string): Observable<User | undefined>{
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined){
          return this.createUser(username);
        }
        return of(user);
      })
    )
  }

  //Check if user exist

  private checkUsername(username: string):Observable<User | undefined>{
    return this.http.get<User[]>(`${this.API_TRAINERS}?username${username}`)
    .pipe(
      //RxJS operators
      map((response: User[]) => {
        return response.pop()
      })
    )

  }

  //create User
  private createUser(username: string):Observable<User>{
    const user = {
      username,
      pokemon: []
    }

    const headers = new HttpHeaders ({
      "content-Type": "application/json",
      "x-api-key": this.API_KEY
    });
    return this.http.post<User>(this.API_TRAINERS, user,{
      headers
    })
 
  }
  

}
