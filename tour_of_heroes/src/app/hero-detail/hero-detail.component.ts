import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../heroes/hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  public hero: Hero | undefined


  constructor(public heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  public getSwitchButt(): void {
    this.heroService.checkForHide = false
  }

  public goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
