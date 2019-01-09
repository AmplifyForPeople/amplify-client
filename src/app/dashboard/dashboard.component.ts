import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { EstablishmentService } from '../apiservice/establishment.service';
import { Establishment } from '../entities/Establishment';
import { Song } from '../entities/Song';

import { Local } from 'protractor/built/driverProviders';

declare var $: any;

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public tableData1: TableData;

  actualSong: String;
  actualAuthor: String;

  nextSong: String;
  nextAuthor: String;

  activeUser: number;

  local = new Establishment();

  currentInPlayList: Song;
  nextInPlayList: Song;

  constructor(private service: EstablishmentService) {
  }

  async ngOnInit() {
    //const json: String = '{"genres":[{"id":2,"name":"Pop"},{"id":1,"name":"Rock"}],"id":1,"imatge":"https://media-cdn.tripadvisor.com/media/photo-s/02/c0/4e/b1/the-establishment.jpg","info":"1","name":"aaaa","playlists":[{"current":false,"id":0,"song":{"author":"bbb","id":2,"image":"http://images.coveralia.com/audio/a/Andres_Cepeda-Cancion_Rota-Frontal.jpg","name":"bbb","votes":0}},{"current":true,"id":0,"song":{"author":"aaa","id":1,"image":"http://images.coveralia.com/audio/a/Andres_Cepeda-Cancion_Rota-Frontal.jpg","name":"aaaa","votes":0}}],"position_lat":1.0,"position_lng":1.0}'

    const getData = await this.service.getData();
    this.local.fromJSON(JSON.stringify(getData));

    this.actualSong = this.local.getCurrent().getName();
    this.actualAuthor = this.local.getCurrent().getAuthor();

    this.activeUser = 2;

    const songs: Array<Song> = this.local.getNoCurrent();
    const rows = [];

    for (let i = 0; i < songs.length; i++) {
      const element = [];
      element.push(songs[i].id);
      element.push(songs[i].name);
      element.push(songs[i].author);
      element.push(songs[i].album);
      element.push(songs[i].votes);
      rows.push(element);
    }

    this.tableData1 = {
      headerRow: ['ID', 'Name', 'Artist', 'Genre', 'Popularity'],
      dataRows: rows
    };


    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [287, 385, 490, 562, 594, 626, 698, 895, 952],
        [67, 152, 193, 240, 387, 435, 535, 642, 744],
        [23, 113, 67, 108, 190, 239, 307, 410, 410]
      ]
    };

    var optionsSales = {
      low: 0,
      high: 1000,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    var responsiveSales: any[] = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartActivity', data, options, responsiveOptions);

    var dataPreferences = {
      series: [
        [25, 30, 20, 25]
      ]
    };

    var optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false
      }
    };

    new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    new Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    });
  }
}
