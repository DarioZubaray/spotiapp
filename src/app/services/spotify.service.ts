import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready!');
  };

  getRequest() {
    const headers = new HttpHeaders ({
      'Authorization':'Bearer BQAOoKATZeIAl8JluC_o7Tii-YuYNcFrwjPu7DNSXG025fllRuFDzl-zCkLQPR1Xf5bm7gOLIN1bGILP23_rssfEMS9PH-zdrhZZPT0TwIlnmmXPdVyqrWUHNr8owJV4BcqhIyeqRYPNgcjlw7wR3amr7AGnAl9Tsw'
    });
    let url = 'https://api.spotify.com/v1/browse/new-releases';
    return this.http.get(url, { headers });

  }
}
