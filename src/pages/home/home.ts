import { Component } from '@angular/core';
import { Uid } from '@ionic-native/uid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imei: any = "";

  constructor(private uid: Uid) {
    this.imei = this.uid.IMEI;
  }

}
