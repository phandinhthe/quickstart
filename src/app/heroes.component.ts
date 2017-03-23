import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import {Router} from "@angular/router";

@Component({
  // selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  appName = 'Angular';
  title = 'Tour of Heroes';
  favouriteHero: Hero = {
    id: 0,
    name: 'Batman'
  }
  hatefulHero: Hero = {
    id: 0,
    name: 'Superman'
  }
  selectedHero: Hero;
  heroes: Hero[];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  };

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: String): void {
    this.heroService.add(name).then(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero)
      .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {this.selectedHero = null;}
    });
  }
}


