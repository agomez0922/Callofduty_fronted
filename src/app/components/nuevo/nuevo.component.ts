import { Component, OnInit} from '@angular/core';
declare var funcion1: any;
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  onClick1(){
    alert('iniciada sesión');
  }
}
