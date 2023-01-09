import { Component, OnInit } from '@angular/core';

interface Article {
  titre: string;
  auteur: string;
  date: string;
  contenu: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre: string = 'Les articles du jour';
  listeArticles: Article[] = [
    { titre: 'Le championnat du monde', auteur: 'Med Taher', date: '12/12/2005', contenu: 'Le champion du monde de cette année est ....' },
    { titre: 'Les nouveaux parents', auteur: 'Ahmed Said', date: '11/11/2018', contenu: 'Les nouveaux parents....' },
    { titre: 'Comment écrire votre CV', auteur: 'Marie Elsa', date: '02/04/2017', contenu: 'Pour réussir à décraucher un emploi ...' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
