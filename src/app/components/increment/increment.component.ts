import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('name') progressTitle:string = 'Leyanda';
  @Input() progress: number = 50;
  @Output() changeProgress: EventEmitter<number> = new EventEmitter();

  constructor() { 
    //console.log('leyanda', this.progressTitle);
    //console.log('Progreso', this.progress);
  }

  ngOnInit() {
    //console.log('leyanda', this.progressTitle);
    //console.log('Progreso', this.progress);
  }

  onChanges(newValue:number){
    //console.log(newValue)

    //let elemHTML:any = document.getElementsByName('progress')[0];
    console.log(this.txtProgress)
  
    if(newValue >= 100){
      this.progress = 100;
    }else if(newValue <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }

    //elemHTML.value = Number(this.progress);
    this.txtProgress.nativeElement = this.progress;

    this.changeProgress.emit(this.progress);

  }

  changeValue(value){

    if(this.progress >= 100 && value > 0){
      this.progress = 100;
      return;
    }

    if(this.progress <= 0 && value < 0){
      this.progress = 0;
      return;
    }

    this.progress += value;

    this.changeProgress.emit(this.progress);

    this.txtProgress.nativeElement.focus();
  }

}
