import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { testValidator } from './view-filter.validators';
import { Filter } from '../videos.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.scss']
})
export class ViewFilterComponent implements OnInit, OnDestroy {
  @Output() filterChange = new EventEmitter<Filter>();
  filterForm: FormGroup;
  filterChangeSubscription: Subscription;

  constructor(fb: FormBuilder) {
    this.filterForm = fb.group({
      region: ['All'],
      ageGroupTeens: [true],
      ageGroupYoungAdults: [true],
      ageGroupAdults: [true],
      ageGroupSeniors: [true],
      test: ['', testValidator('test123')]
    });
    this.filterChangeSubscription = this.filterForm.valueChanges.subscribe(filter => this.filterChange.emit(filter));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.filterChangeSubscription.unsubscribe();
  }

}
