/**
 * Created by hoangnd on 4/16/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
//"Reactive Extensions for JavaScript" is a library for transforming, composing, and querying streams of data
@Injectable()

export class PetService {
  constructor(private http:Http) {

  }

  private url:string = "http://localhost:3004/pets";
  getPets() {
    return this.http.get(this.url).map((response: Response) => response.json());
  }
}

