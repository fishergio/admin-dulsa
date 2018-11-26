import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { 

    this.counterPromise()
      .then((resp) => console.log("Todo bien", resp))
      .catch((error) => console.error("Error en la promesa", error))
  }

  counterPromise() : Promise<boolean> {
    return new Promise((resolve, reject) => {

      let counter = 0;

      let interval = setInterval(() => {

        counter += 1;

        console.log(counter)
        if (counter == 3) {
          resolve(true);
          //reject('Algo salio mal')
          clearInterval(interval);
        }
      }, 1000)
    })
  }

  ngOnInit() {
  }

}
