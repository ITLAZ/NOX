import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    public db: DatabaseService
  ) {
    this.db.addFirestoreDocument('TestsLocations',
      {
        name: 'Test Location 1',
        size: 150 
      }).then((res) => {
        console.log('Escrito con exito', res);
      }).catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

}
