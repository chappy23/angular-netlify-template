import { Component, OnInit } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { HelloWorldService } from './hello-world/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-netlify-template';
  public message = '';

  constructor(
    private readonly helloWorldService: HelloWorldService,
  ) {
  }

  public ngOnInit(): void {
    this.helloWorldService
      .getMessage()
      .subscribe((result: HelloWorld) => this.message = result.message);
  }
}
