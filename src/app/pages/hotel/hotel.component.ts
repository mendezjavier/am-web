import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
@Input() data: Hotel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openHotel(){
    this.router.navigate(['/hotel', this.data.id]);
  }
}

