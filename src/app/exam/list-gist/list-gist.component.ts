import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gists} from './model/gists';


@Component({
  selector: 'app-list-gist',
  templateUrl: './list-gist.component.html',
  styleUrls: ['./list-gist.component.css']
})
export class ListGistComponent implements OnInit {

  readonly ROOT_URL = 'https://api.github.com';
  gistsCatalog: Gists[] = [];
  gistsView: Gists[] = []; //to jest wyświetlane na widoku
  test: string[];
  start = 0;
  pageSize = 5;
  idgista: string;
  private urlGist: string;
  gistlogin: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  zaladujGisty() {
    const headers = new HttpHeaders({
      Authorization: 'token 7712293418d017142b3a87238979ebca37627811',
      Accept: 'application/vnd.github.v3+json'
    });
    this.http.get<Gists[]>(this.ROOT_URL + `/gists/public`, {headers}).subscribe(gists => {
      //ta funkcja jest wykonana dopiero gdy zapytanie zwróci dane
      this.gistsCatalog = gists;
      gists.forEach(gist => {
        const names = Object.keys(gist.files);
        gist["filenames"] = names;
      });
      // console.log(Object.keys(gists[0].files));console.log(Object.keys(gists[1].files));console.log(Object.keys(gists[2].files));
      this.selectView();
    });
    ;
  }

  previous() {
    this.start -= this.pageSize;
    if (this.start < 0) {
      this.start = 0;
    }
    this.selectView();
  }

  next() {
    //długość tablicy:  this.gistsCatalog.length
    if (this.start + this.pageSize < this.gistsCatalog.length) {
      this.start += this.pageSize;
    }
    this.selectView();
  }

  private selectView() {
    this.gistsView = this.gistsCatalog.slice(this.start, this.start + this.pageSize);
  }

  max_page() {
    return Math.floor(this.gistsCatalog.length / this.pageSize);
  }

  searchGistWithDesc() {
    this.gistsView = this.gistsView.filter(a => a.description);
  }

  searchUrlForGist() {
    this.urlGist = 'https://api.github.com/gists/';
    if (this.idgista == null) {
      alert('Wprowadź prawidłowe id Gista');
    } else {
      alert(`${this.urlGist}${this.idgista}`);
    }
  }

  searchGistWithLongLogin() {
    this.gistsView = this.gistsView.filter(a => {
      return a.owner['login'] === this.gistlogin;
    });
    console.log(this.gistlogin);
  }
}
