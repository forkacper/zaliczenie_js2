import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-gist',
  templateUrl: './edit-gist.component.html',
  styleUrls: ['./edit-gist.component.css']
})
export class EditGistComponent implements OnInit {
  readonly ROOT_URL = 'https://api.github.com';
  newGist: Observable<any>;
  idGist: string;
  nazwaPliku: string;
  zawartoscPliku: string;
  opisGist: string;
  nazwaPliku2: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  editGist() {
    if (this.idGist == null) {
      alert('Wprowadź id gista!');
      return 0;
    }
    const data = {
      "description": \`${this.opisGist}`,
      "files": {
        [this.nazwaPliku]: {
          "filename": `${this.nazwaPliku2}`,
          "content": `${this.zawartoscPliku}`
        }
      }
    }
    const headers = new HttpHeaders({Authorization: 'token 7712293418d017142b3a87238979ebca37627811', Accept: 'application/vnd.github.v3+json'});
    this.newGist = this.http.patch(this.ROOT_URL + `/gists/${this.idGist}`, data, {headers});
  }
}
