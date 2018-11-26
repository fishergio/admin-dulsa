import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() { 

    this.subcription = this.returningObservable().pipe(
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

  ngOnDestroy(){
    console.log("Saliendo de la página");
    this.subcription.unsubscribe();
  }

  returningObservable(): Observable<any>{

    return new Observable((observer: Subscriber<any>) => {

      let counter = 0;

      let interval = setInterval(() => {

        counter++;

        const outputData = {
          value: counter
        }
        observer.next(outputData);

        /*if (counter == 3) {
          clearInterval(interval);
          observer.complete()
        }*/

        /*if (counter == 2) {
          //clearInterval(interval);
          observer.error('Upps!')
        }*/

      }, 1000)

    }).pipe(
      map( (resp) => resp.value ),
      filter( (value, index) => {
        return ((value % 2) == 1) ? true : false
      })
    )
  }

}
