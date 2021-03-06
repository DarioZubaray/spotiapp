import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotiSer: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe( params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista( id:string ) {
    this.spotiSer.getArtista(id).subscribe( data => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks( id:string ) {
    this.spotiSer.getTopTracks(id).subscribe( data => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
