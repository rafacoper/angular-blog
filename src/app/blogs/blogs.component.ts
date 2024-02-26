import { Component, OnInit } from '@angular/core';
import { blogData } from './data/blog.data';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{

  ngOnInit(): void { }

  mainBlogSection = blogData[0]

  docker = blogData[1]

  githubprofile = blogData[2]

  uiElements = blogData[3]

  codetoimprove = blogData[4]
}
