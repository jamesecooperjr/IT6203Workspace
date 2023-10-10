import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appAnimalimage]'
})
export class AnimalimageDirective {
  @Input() animalName: string = "";

  constructor() { }
}
