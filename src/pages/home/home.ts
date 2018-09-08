import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  calendarOptions:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit(){
    this.calendarOptions = {
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'All'
        }
      },
     // theme:'jquery-ui',
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      eventClick: (event) => {
        console.log(event);
        alert('Event Clicked \n'+ 'Event Name : '+ event.title);
      },
      dayClick: (date, jsEvent, view, resourceObj) => {
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2018-09-04',
            color : 'red',
            editable: true,
          },
          {
            title: 'Long Event',
            start: '2018-10-09',
            end: '2017-11-12',
            color: 'blue'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2018-10-09T16:00:00'
          },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2018-11-13'
        },
        {
          title: 'Meeting',
          start: '2018-09-12T10:30:00',
          end: '2018-09-16T12:30:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-09-28'
        }
      ]
    };
  }

}
