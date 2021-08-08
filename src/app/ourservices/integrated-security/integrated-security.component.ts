import { Component, OnInit } from '@angular/core';
import { ContentsService } from 'src/app/contents.service';

@Component({
  selector: 'app-integrated-security',
  templateUrl: './integrated-security.component.html',
  styleUrls: ['./integrated-security.component.css']
})
export class IntegratedSecurityComponent implements OnInit {

  public ourServices
  constructor(private contentsService: ContentsService) { }

  ngOnInit(): void {
    this.getOurServices()
  }

  getOurServices():any{
    this.ourServices = this.contentsService.getOurServices()
  }
}
