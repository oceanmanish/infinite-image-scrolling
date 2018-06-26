import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    footerEnable = false;
    constructor(public navCtrl: NavController) {

    }
    test() {
        this.footerEnable = true;
    }
test1(){
    this.navCtrl.setRoot(HomePage);
       console.log('vagtcdg');
}
}
