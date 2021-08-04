import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsService {
  constructor() {}

  getWhoWeAre(): any {
    let whoWeAre = [
      {
        type: 'Branches',
        text:
          "branches Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      },
      {
        type: 'Sites',
        text:
          'Sites uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
      },
      {
        type: 'Clients',
        text:
          'Clients uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
      },
      {
        type: 'Employees',
        text:
          'Employees uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
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
}
