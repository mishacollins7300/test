import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {newArray} from "@angular/compiler/src/util";

export class Client {
  constructor(
    first_name: string,
    sec_name: string,
    tax_number: number,
    email: string,
    company: string,
  ) {
  }


}
@Injectable({ providedIn: 'root' })
export class AppAddClientService {

  client: Client[] = [];
  constructor(private http: HttpClient) {}

  /*addClient() : Observable<Client[]> {
    return this.http.post()
  }*/
}
