import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

// https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch'
//import 'rxjs/add/operator/retry'

// Service created width command: ng g service theme/jsonplaceholder/posts

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = environment.jsonplaceholder;
  constructor(private _http:ConfigService) {
  }

  getPosts(): Observable<any> {
      let path: string = `${this.url}/posts`;
      return this._http.get(path);
  }

  getPhotos(): Observable<any> {
    let path: string = `${this.url}/photos`;
    return this._http.get(path);
}
}
