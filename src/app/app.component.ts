import { Component } from '@angular/core';

import { AngularFireDatabase} from '@angular/fire/database';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  description = 'firebase-test';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    const itemValueBody = {
      id: Date.now(),
      content: this.itemValue
    };

    this.db.list('items').push(itemValueBody);
    this.itemValue = '';
  }
}
