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
  fecha = new Date(1988,3,4);
  numero:number; 
  format: string = 'shortDate'
  loadimagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2BS9sdM9F3szk4W8YP_DfTh8TwhBGAsll7gyiLSDFOdJE1n0';
  imagen=null;

  constructor(private _postService: PostsService) { 
    this.posts = [
      {
        id : '',
        title : '',
        body : ''
      }
    ];
    this.numero = 2.12345;
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(
      result => {
        console.log(result);
        this.posts = result;
      }
    )

    setTimeout(()=> {
      this.imagen = this.loadimagen;
    }, 3000);
  }

  clickFormat() {
    if (this.format === 'shortDate') {
      this.format='yyy/mm/dd';  
    } else {
      this.format='shortDate';
    }
  }

}
