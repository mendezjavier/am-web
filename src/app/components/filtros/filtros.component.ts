import { Component, OnInit, Output, 
  EventEmitter, Input,
  OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit,OnChanges {
  closeFiltersName = false;
  closeFiltersStars = false;
  closeFilters = false;
  
  stars_check = [
    { stars: 0, selected: true, label: 'Todas las estrellas' },
    { stars: 1, selected: false, label: '1 estrella' },
    { stars: 2, selected: false , label: '1 estrellas'},
    { stars: 3, selected: false , label: '3 estrellas'},
    { stars: 4, selected: false , label: '4 estrellas'},
    { stars: 5, selected: false , label: '5 estrellas'}
  ];
Array = Array
@Input() filter = {
                    name: '',
                    stars: '0'
                  };

  @Output() apply = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (matchMedia) {
      const mq = window.matchMedia("(min-width: 900px)");
      mq.addListener(this.WidthChange);
      this.WidthChange(mq);
      }
  }
 
 WidthChange(mq) {

    if (!mq.matches) {
      this.closeFilters = true;
    } else {
      this.closeFilters = false;
    }
  
  }


  ngOnChanges(changes: SimpleChanges) {
      this.filter.name = changes.filter.currentValue.name;
      let checked = changes.filter.currentValue.stars.split(',');
      this.stars_check.map( op => {
        if(checked.indexOf(op.stars.toString()) !== -1) {
          op.selected = true;
        } else {
          op.selected = false;
        }
      });
     
  }
  applyFilter() {
    this.apply.emit(this.filter);
  }


  checkStar(stars_checked, selected){
    let all_selected = stars_checked === 0 ? true : false ;
    let filter_selected = [];
    this.stars_check.map( op => {
      if(op.stars === stars_checked) {
        op.selected = !op.selected;
      }
      if(op.selected) {
        filter_selected.push(op.stars);
      }
    });
    if(filter_selected.length === 0 || (all_selected && selected)){
      this.filter.stars = '0';
    } else {
      
      this.filter.stars = filter_selected.filter(n => n !== 0).join(',');
    }
    this.applyFilter();
  }

}
