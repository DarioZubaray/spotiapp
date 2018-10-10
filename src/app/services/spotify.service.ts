import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready!');
  };

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders ({
      'Authorization':'Bearer BQBQTfOswQCgcURLaIa5E-bLYK0MZa8C0wQz9kzonPV0FVCg5RSSPBM4iIPylo3uD-fQFXOB57wZvzaD_6hdeHiiTUMq-LNq8rqGbND60SdqVGIccUE4cKZW-eLXKMq_Xl2UxvCC9ck-UQak_3s-XjuWtWaWvB2Zeg'
    });
    return this.http.get(url, { headers });
  }

  getRequest() {
    return this.getQuery('browse/new-releases')
            .pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
            .pipe( map( (data: any) => {
              return data.artists.items;
            }));
  }
}
