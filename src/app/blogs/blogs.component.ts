import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  mainBlogSection: any = {
    blogLink: "https://blog.angular.io/introducing-angular-v17-4d7033312e4b",
    blogTitle: "Introducing Angular v17",
    blogIntro: "Last month marked the 13th anniversary of Angulars red shield. AngularJS was the starting point for a new wave of JavaScript frameworks… Go to the profile of Minko Gechev Minko Gechev."
  }

  docker: any = {
    blogLink: "https://dev.to/davidmm1707/docker-basics-for-beginners-49l9?ref=dailydev",
    blogTitle: "Docker basics for beginners",
    blogIntro: "Go learn more about Docker"
  }
  githubprofile: any = {
    blogLink: "https://dev.to/kshyun28/how-to-make-your-awesome-github-profile-hog?ref=dailydev",
    blogTitle: "Make your Github awesome",
    blogIntro: "Go learn more about it"
  }

  uiElements: any = {
    blogLink: "https://www.producthunt.com/products/uiverse-io",
    blogTitle: "UI/UX",
    blogIntro: "Go learn more about it"
  }
  codetoimprove: any = {
    blogLink: "https://blog.bytebytego.com/p/ep97-10-good-coding-principles-to?ref=dailydev",
    blogTitle: "Coding Principles",
    blogIntro: "Go learn more about it"
  }
}
