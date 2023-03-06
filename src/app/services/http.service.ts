import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = 'http://localhost/214_szft_22_23/Frontend/WorkTimeApp/API/database.php';

  constructor(private http: HttpClient) {}

  selectAll(table: string) {
    return this.http.get(this.serverUrl+'?table='+table);
  }

  selectByID(table: string, id: number){
    return this.http.get(this.serverUrl+'?table='+table+'&id='+id);
  }

  selectByField(table: string, field: string, op: string, value: string){
    return this.http.get(this.serverUrl+'?table='+table+'&field='+field+'&op='+op+'&value='+value);
  }

  insert(data: object) {
    return this.http.post(this.serverUrl, { body:data });
  }

  update(data: object) {
    return this.http.patch(this.serverUrl, { body:data });
  }

  delete(data: object) {
    return  this.http.delete(this.serverUrl, { body: data });
  }
  
}