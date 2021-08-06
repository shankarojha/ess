import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ContentsService } from '../contents.service';
import  AOS  from "aos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public windowHeight= window.innerHeight
  public navFix=false;
  public whoWeAre
  public team
  public navbarHeight

  constructor(private contentsService : ContentsService) {}

  ngOnInit(): void {
    AOS.init()
    this.getWhoWeAre()
    this.getTeam()
    this.getNavbarHeight()
    console.log(this.windowHeight)
    console.log(this.navbarHeight)
  }

  getNavbarHeight(){
    this.navbarHeight=document.getElementById("navbarBottom").offsetHeight;
}
  
  @HostListener("window:scroll", ['$event']) scrollFunction(){
    if(document.documentElement.scrollTop>=this.windowHeight-this.navbarHeight){
      this.navFix=true
    }else{
      this.navFix=false
    }
  }

  getWhoWeAre():any{
    this.whoWeAre = this.contentsService.getWhoWeAre()
  }

  getTeam():any{
    this.team = this.contentsService.getTeam()
  }
}
