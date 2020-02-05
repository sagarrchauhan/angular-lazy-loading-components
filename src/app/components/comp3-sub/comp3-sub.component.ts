import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp3-sub',
  templateUrl: './comp3-sub.component.html',
  styleUrls: ['./comp3-sub.component.css']
})
export class Comp3SubComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
