import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-na-lib-example',
  template: `
    <p>
      <button>my library button</button>
      na-lib-example works!
    </p>
  `,
  styles: [
  ]
})
export class NaLibExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
