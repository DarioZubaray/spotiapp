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
      'Authorization':'Bearer BQD94wBXjF-bSfqYEihe1XHLsK80I1L8iqGEtryATz7f9QJE5wXSk9SFQdghbFCFMGY-Vzy9OLJthDXsOJzAVDtxsUfbiygM9gsTmpUooepylv2My1AcZcYO_65CYEs35mox75ZHO4lZVp_pcA9WaB7TafSoXfYxPg'
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
