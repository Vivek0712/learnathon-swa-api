import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Reactor SWA submission</h2>
        <p>
          This project was created to serve as a portal for Learnathon Participants to submit the projects.
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
              Code in GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AboutComponent {}
