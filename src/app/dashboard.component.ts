/**
 * Created by tphan on 2017-03-04.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service'


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) {};

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
  }

  ngOnInit() {
    this.getHeroes();
  }

}
