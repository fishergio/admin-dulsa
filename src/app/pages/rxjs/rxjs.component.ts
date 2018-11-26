import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 
    
    this.returningObservable().pipe(
      retry(2)
    )
    .subscribe( 
      (data) => console.log('Subs', data) ,
      (error) => console.error("Error", error),
      () => console.log("Proceso completado!")
    )

  }

  ngOnInit() {
  }

  returningObservable(): Observable<number>{

    return new Observable(observer => {

      let counter = 0;

      let interval = setInterval(() => {

        counter++;
        observer.next(counter);

        if (counter == 3) {
          clearInterval(interval);
          observer.complete()
        }

        if (counter == 2) {
          //clearInterval(interval);
          observer.error('Upps!')
        }

      }, 1000)

    })
  }

}
