import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// export class HeroesComponent implements OnInit {
//   // on initialize des variables et méthodes directly below
//   heroes: Hero[];
// // below on typer selectHero => Hero;
//   selectedHero: Hero;

//   // Add a private heroService parameter of type HeroService to the constructor.
//   constructor(private heroService: HeroService) { }
//    // onSelect(hero: Hero): void => typer : et sortir void (no sortie)
//    onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

//   //to change method getHeroes Asynchronyser
//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }

//   ngOnInit() {
//     this.getHeroes();
//   }

// }

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}