import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  value = [];

  language = [
    {
      nome: "Python"
    },{
      nome: "JavaScript"
    },{
      nome: 'TypeScript'
    },{
      nome: "HTML"
    },{
      nome: "CSS"
    },{
      nome: "Java"
    },{
      nome: "C#"
    },{
      nome: "PHP"
    },{
      nome: "Ruby"
    },{
      nome: "Swift"
    },{
      nome: "Kotlin"
    },{
      nome: "Go"
    },{
      nome: "Scala"
    },{
      nome: "Rust"
    }
  ]

  currentPage = 1;
  pageSize = 2;
  paginatedItems: any[] = [];
  totalPages: number;
  //searchTerm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
      this.totalPages = Math.ceil(this.language.length / this.pageSize); 
      this.paginatedItems = this.language.slice(0, this.pageSize); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.language.length) {
      this.currentPage++;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      // Atualiza a lista paginada com os itens da nova página
      this.paginatedItems = this.language.slice(startIndex, endIndex);
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      this.paginatedItems = this.language.slice(startIndex, endIndex);
    }
  }
  
}
