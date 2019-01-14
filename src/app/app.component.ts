import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'knowledgeBlogs';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  ngOnInit() {
    this.router.navigate(['/home']);
  }

}
