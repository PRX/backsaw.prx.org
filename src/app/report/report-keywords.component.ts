import {Component, Input} from 'angular2/core';

@Component({
  selector: 'report-keywords',
  styleUrls: ['app/report/report-keywords.component.css'],
  template: `
    <div>
      <h2>Keywords for this episode</h2>
      <ul>
        <li *ngFor="#keyword of keywords">
          {{keyword}}
        </li>
      </ul>
    </div>
  `
})
export class ReportKeywordsComponent {
  @Input() keywords: string[];
}
