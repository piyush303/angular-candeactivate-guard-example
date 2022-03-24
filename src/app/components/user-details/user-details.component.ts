import { Component, OnInit, HostListener } from '@angular/core';
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

  
  @HostListener('window:beforeunload', ['$event'])
  public onBeforeUnload(event: BeforeUnloadEvent): void {
    this.isAllowedNavigation(true).subscribe(isAllowedNavigation => {
      if (event && !isAllowedNavigation) {
        event.preventDefault();
        event.returnValue = false;
      }
    });
  }

  constructor() {
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> {
    return this.isAllowedNavigation();
  }

  private isAllowedNavigation(beforeunloadEvent = false): Observable<boolean> {
    if (!this.isSaved || beforeunloadEvent) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }

    return of(true);
  }

  onSubmit() {
    this.isSaved = true;
  }

}
