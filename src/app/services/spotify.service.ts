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
      'Authorization':'Bearer BQCZagOkqOpqC_gan3Qd3GER2NRrDcP9BACTbWdsMfJbcopRrJRE7Z7_N9AuBIfrx_2e_olo1O2FTnBts5G8cnO6ROyYE0dzxnQz5KkerXJKcOV19Wh4sPBUBdpRHrcWRoqHev2E4-2hYOdHT8s2ldUlcrcmyuadGg'
    });
    return this.http.get(url, { headers });
  }

  getRequest() {
    return this.getQuery('browse/new-releases')
            .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
            .pipe( map( (data: any) => {
              return data.artists.items;
            }));
  }

  getArtista( id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
                .pipe( map( data => data['tracks'] ));
  }
}
