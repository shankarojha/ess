import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private contentsService : ContentsService) {}

  public whoWeAre
  public team

  ngOnInit(): void {
    this.getWhoWeAre()
    this.getTeam()
  }

  getWhoWeAre():any{
    this.whoWeAre = this.contentsService.getWhoWeAre()
  }

  getTeam():any{
    this.team = this.contentsService.getTeam()
  }
}
