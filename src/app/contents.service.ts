import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsService {
  constructor() {}

  getWhoWeAre(): any {
    let whoWeAre = [
      {
        type: 'Sites',
        projectedNumber:300,
        iconSrc : "location.png"
        },
      {
        type: 'Clients',
        projectedNumber:500,
        iconSrc : "clients.png"
        },
      {
        type: 'Branches',
        projectedNumber:700,
        iconSrc : "branch.png"
        },
      {
        type: 'Employees',
        projectedNumber:900,
        iconSrc : "employee.png"
      },
    ];
    return whoWeAre;
  }

  getTeam(): any {
    let team = [
      {
        name: 'A',
        details:
          'Auries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
      {
        name: 'B',
        details:
          'Buries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
      {
        name: 'C',
        details:
          'Curies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
    ];

    return team;
  }

  getOurServices():any{
    let services = [
      {
        service:"Integrated Security",
        details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore magni, consectetur vero sint facilis ratione, corrupti quis reprehenderit, dolorem quibusdam modi iste dolores magnam officiis! Saepe unde beatae ea minus.",
        icon:"icons8-delete-shield.gif"
       },
       {
        service:"Facility Management",
        details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore magni, consectetur vero sint facilis ratione, corrupti quis reprehenderit, dolorem quibusdam modi iste dolores magnam officiis! Saepe unde beatae ea minus.",
        icon:"icons8-vacuuming-100.png"
       },
       {
        service:"Supply Chain",
        details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore magni, consectetur vero sint facilis ratione, corrupti quis reprehenderit, dolorem quibusdam modi iste dolores magnam officiis! Saepe unde beatae ea minus.",
        icon:"icons8-truck-weight-max-loading-100.png"
       },
       {
        service:"Training",
        details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore magni, consectetur vero sint facilis ratione, corrupti quis reprehenderit, dolorem quibusdam modi iste dolores magnam officiis! Saepe unde beatae ea minus.",
        icon:"icons8-training-100.png"
       }
    ]
    return services
  }
}
