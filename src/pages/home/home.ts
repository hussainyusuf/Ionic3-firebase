import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jobs: any;
  constructor(
    public navCtrl: NavController,
    public db: DataProvider
    ) {
    }

  ionViewDidLoad() {
    this.db.getjobsList().subscribe( data => {
      this.jobs = data;
    });
  }
  

}
