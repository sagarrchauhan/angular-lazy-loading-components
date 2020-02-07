import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() data: any;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  navigate(url) {
    this.router.navigate([url]);
  }

}
