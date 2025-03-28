import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone:true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:String =""
  @Input()
  cardTitle:String=""
  @Input()
  cardDescription:String=""

}
