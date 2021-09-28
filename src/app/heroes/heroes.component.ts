import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  public isCollapsed = false;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(nim: string, name: string, jenis_kelamin:string, alamat:string, nama_bpk:string, nama_ibu:string, jurusan:string, prodi:string, ipk_terakhir:number): void {
    name = name.trim();
    nim = nim.trim();
    jenis_kelamin = jenis_kelamin.trim();
    alamat = alamat.trim();
    nama_bpk = nama_bpk.trim();
    nama_ibu = nama_ibu.trim();
    jurusan = jurusan.trim();
    prodi = prodi.trim();
    if (!nim || !name || !jenis_kelamin || !alamat || !nama_bpk || !nama_ibu || !jurusan || !prodi|| !ipk_terakhir) { return; }
    this.heroService.addHero({ nim, name, jenis_kelamin, alamat, nama_bpk, nama_ibu, jurusan, prodi, ipk_terakhir } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}