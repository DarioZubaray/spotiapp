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
      'Authorization':'Bearer BQBU1y27jEY9AxBs2qrn5GS3d5hX8R0GH9DV2_ppkIRbnFRsgyxv76ZM1_QbyjTEIcw8LlNHefxSvART3-2dG22rzXA1UhEHJKGBJaqrJp-MeNQdU6cn8oLPiGMMEXFpoo6y4Jd__4ESU6tOjmdBE9MyRXXqyRzF7w'
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
