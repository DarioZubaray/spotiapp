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
      'Authorization':'Bearer BQD94wBXjF-bSfqYEihe1XHLsK80I1L8iqGEtryATz7f9QJE5wXSk9SFQdghbFCFMGY-Vzy9OLJthDXsOJzAVDtxsUfbiygM9gsTmpUooepylv2My1AcZcYO_65CYEs35mox75ZHO4lZVp_pcA9WaB7TafSoXfYxPg'
    });
    let url = 'https://api.spotify.com/v1/browse/new-releases';
    return this.http.get(url, { headers });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders ({
      'Authorization':'Bearer BQD94wBXjF-bSfqYEihe1XHLsK80I1L8iqGEtryATz7f9QJE5wXSk9SFQdghbFCFMGY-Vzy9OLJthDXsOJzAVDtxsUfbiygM9gsTmpUooepylv2My1AcZcYO_65CYEs35mox75ZHO4lZVp_pcA9WaB7TafSoXfYxPg'
    });
    let url = 'https://api.spotify.com/v1/search';
    let params = "?q="+termino+"&type=artist";
    return this.http.get(url + params, { headers });
  }
}
