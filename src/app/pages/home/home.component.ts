import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../theme/jsonplaceholder/posts.service'

// Component created width command: ng g c pages/home

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any;

  constructor(private _postService: PostsService) { 
    this.posts = [
      {
        id : '',
        title : '',
        body : ''
      }
    ]
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(
      result => {
        console.log(result);
        this.posts = result;
      }
    )
  }

}
