import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jobs: any;
  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase
    ) {
    }

  ionViewDidLoad() {
    this.db.list('jobs/').valueChanges().subscribe((data) => { 
      this.jobs = data;
    },(err)=>{
      console.log("probleme : ", err)
    });
  }
  

}
