import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  isSaved = false;
  userDetailsForm: FormGroup;

  constructor() {
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }

    return of(true);
  }

  onSubmit() {
    this.isSaved = true;
  }

}
