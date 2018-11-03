import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private jobs = new Subject();
  jobsList = this.jobs.asObservable();
  
  constructor(
    public http: Http,
    private db: AngularFireDatabase) {
  }

  getjobsList(): Observable<{}> {
    this.db.list('jobs').valueChanges().subscribe((data) => { 
      this.jobs.next(data);
    },(err)=>{
       console.log("probleme : ", err)
    });
    return this.jobsList;
  }
}