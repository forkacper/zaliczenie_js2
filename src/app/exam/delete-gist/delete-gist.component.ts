import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-gist',
  templateUrl: './delete-gist.component.html',
  styleUrls: ['./delete-gist.component.css']
})
export class DeleteGistComponent implements OnInit {
  readonly ROOT_URL = 'https://api.github.com';
  deleteGist: Observable<any>;
  idGist: string;
  chechboxDeleteGist: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if(this.chechboxDeleteGist == null) {
      this.chechboxDeleteGist = false;
    }
  }

  usunGista() {
    if (this.idGist == null || this.idGist.length < 10) {
      alert('Wprowadź prawidłowe id gista!');
      return 0;
    }
    else if(this.chechboxDeleteGist === false) {
      alert('Potwierdź usunięcie Gista!');
      return 0;
    }
    const headers = new HttpHeaders({Authorization: 'token 7712293418d017142b3a87238979ebca37627811', Accept: 'application/vnd.github.v3+json'});
    this.deleteGist = this.http.delete(this.ROOT_URL + `/gists/${this.idGist}`, {headers});
  }
}
