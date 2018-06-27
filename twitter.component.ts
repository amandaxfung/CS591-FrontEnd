import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor( private http: HttpClient) {

  }

  ngOnInit() {
  }

  public getTwitterStuff(): any {

    return this.http.get('http://localhost:3000/twitter_model');

  }
  }

