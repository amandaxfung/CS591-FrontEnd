import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {


  constructor( private http: HttpClient) {

  }

  ngOnInit() {
  }

  public spotifyLogin(): any{
    window.location.href='http://localhost:3000/'

  }

    public getSpotifyInfo(): any {

    return this.http.get('http://localhost:3000/callback');

  }

}





