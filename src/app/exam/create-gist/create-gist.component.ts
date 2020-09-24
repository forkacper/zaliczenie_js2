import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-gist',
  templateUrl: './create-gist.component.html',
  styleUrls: ['./create-gist.component.css']
})
export class CreateGistComponent implements OnInit {

  readonly ROOT_URL = 'https://api.github.com';
  newGist: Observable<any>;

  constructor(private http: HttpClient) { }

  opisGist: string;
  nazwaPliku: string;
  zawartoscPliku: string;
  publicznyGist: boolean;
  item: boolean;


  ngOnInit(): void {
    if(this.publicznyGist == null) {
      this.publicznyGist = false;
    }
  }
  createGist() {
    if(this.opisGist == null || this.zawartoscPliku == null) {
      alert('Wprowadź wymagane wartości!');
      return 0;
    }
    const data = {
      "description": `${this.opisGist}`,
      "public": `${this.publicznyGist}`,
      "files": {
        [this.nazwaPliku]: {
          "content": `${this.zawartoscPliku}`
        }
      }
    }
    const headers = new HttpHeaders({Authorization: 'token 7712293418d017142b3a87238979ebca37627811', Accept: 'application/vnd.github.v3+json'});
    this.newGist = this.http.post(this.ROOT_URL + '/gists', data, {headers});
  }
}
