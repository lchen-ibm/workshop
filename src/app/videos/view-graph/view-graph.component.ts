import { Component, Input, OnInit } from '@angular/core';

import { View } from '../videos.types';

@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.scss']
})
export class ViewGraphComponent implements OnInit {
  @Input() viewDetails: View[];

  constructor() {
  }

  ngOnInit() {
  }

}
