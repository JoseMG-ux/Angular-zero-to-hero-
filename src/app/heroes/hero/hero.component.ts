import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man'
  public age: number = 45;

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider Man';
  }

  changeAge() {
    this.age = 20;
  }

  resetForm() {
    //this.name = 'iron man';
    this.age = 45;

    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'
  }
}
