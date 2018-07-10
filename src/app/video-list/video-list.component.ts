import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    tittle = "Video List";
    // videoList = ["Item 1", "Item 2", "Item 3"]
    videoList = [
      {
        name: "Item 1",
        slug: "Item-1"
      },
      {
        name: "Item 2",
        slug: "Item-2"
      },
      {
        name: "Item 3",
        slug: "Item-3"
      },
    ]
 
  constructor() { }

  ngOnInit() {
  }

}
