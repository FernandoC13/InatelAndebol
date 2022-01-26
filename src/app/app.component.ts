import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Team {
  image: string;
  name: string;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsConceded: number;
  games: number;
  points: number;
}

// VITORIAS = 3pts | EMPATES = 2pts | DERROTAS = 1pt
const ELEMENT_DATA: Team[] = [
  {
    image: '../assets/vulcanense.png',
    name: 'Vulcanense Futebol Clube',
    wins: 1,
    draws: 0,
    losses: 5,
    goalsScored: 95,
    goalsConceded: 115,
    games: 6,
    points: 3,
  },
  {
    image: '../assets/sm.png',
    name: 'C.R. São Miguel',
    wins: 5,
    draws: 0,
    losses: 0,
    goalsScored: 100,
    goalsConceded: 81,
    games: 5,
    points: 15,
  },
  {
    image: '../assets/almada.png',
    name: 'A.M.I./Almada Atlético Clube',
    wins: 4,
    draws: 0,
    losses: 1,
    goalsScored: 104,
    goalsConceded: 81,
    games: 5,
    points: 12,
  },
  {
    image: '../assets/carris.png',
    name: 'Grupo Desportivo da Carris',
    wins: 4,
    draws: 0,
    losses: 0,
    goalsScored: 88,
    goalsConceded: 55,
    games: 4,
    points: 12,
  },
  {
    image: '../assets/BP.png',
    name: 'G.D.C. Banco de Portugal',
    wins: 2,
    draws: 0,
    losses: 3,
    goalsScored: 89,
    goalsConceded: 102,
    games: 5,
    points: 6,
  },
  {
    image: '../assets/agualva.png',
    name: '1947 Agualva - Amaterasu',
    wins: 0,
    draws: 0,
    losses: 5,
    goalsScored: 63,
    goalsConceded: 93,
    games: 5,
    points: 0,
  },
  {
    image: '../assets/tranquilidade.png',
    name: 'Tranquilidade',
    wins: 4,
    draws: 0,
    losses: 0,
    goalsScored: 93,
    goalsConceded: 65,
    games: 4,
    points: 12,
  },
  {
    image: '../assets/NB.png',
    name: 'Clube Novo Banco',
    wins: 3,
    draws: 0,
    losses: 4,
    goalsScored: 135,
    goalsConceded: 134,
    games: 7,
    points: 9,
  },
  {
    image: '../assets/liberdade.png',
    name: 'Liberdade Futebol Clube',
    wins: 1,
    draws: 0,
    losses: 6,
    goalsScored: 101,
    goalsConceded: 142,
    games: 7,
    points: 3,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'image',
    'name',
    'games',
    'wins',
    'draws',
    'losses',
    'goalsScored',
    'goalsConceded',
    'points',
  ];
  dataSource: MatTableDataSource<Team>;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    ELEMENT_DATA.sort((a, b) => {
      return a.games - b.games;
    });
    this.sort.sort({ id: 'points', start: 'desc' } as MatSortable);
    this.dataSource.sort = this.sort;
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }
}
