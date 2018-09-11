import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    tittle = "Video List";
    someItem = "<h1>Hi there!</h1>"
    // videoList = ["Item 1", "Item 2", "Item 3"]
    videoList = [
      {
        name: "Item 1",
        slug: "Item-1",
        embed: `1TfUyZxfs0c`,
      },
      {
        name: "Item 2",
        slug: "Item-2",
        embed: `1TfUyZxfs0c`,
      },
      {
        name: "Item 3",
        slug: "Item-3",
        embed: null,
      }
    }
 
  constructor() { }

  ngOnInit() {
  }

}
