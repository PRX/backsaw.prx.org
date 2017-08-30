import {Component, Input} from 'angular2/core';

@Component({
  selector: 'report-keywords',
  styleUrls: ['app/report/report-keywords.component.css'],
  template: `
    <section>
      <h4>This episode's unique identifying keyword:</h4>
      <div class="id-keyword">
        <input type="text" readonly [value]="idKeyword" #idKeywordInput>
        <button
          (mouseover)="resetCopyButton(copyButton)"
          (click)="copyCode(idKeywordInput, copyButton)"
          #copyButton>
          Copy
        </button>
      </div>
      <h4>Other keywords and tags for this episode:</h4>
      <ul>
        <li *ngFor="#keyword of keywords">
          {{keyword}}
        </li>
      </ul>
    </section>
  `
})
export class ReportKeywordsComponent {
  @Input() keywords: string[];
  @Input() idKeyword: string[];

  resetCopyButton(el: Element) {
    el.innerHTML = 'Copy';
  }

  // Copies the HTML code in an input associated with the button that is passed in
  copyCode(inp: HTMLInputElement, button: Element) {
    if (inp && inp.select) {
      inp.select();
      try {
        document.execCommand('copy');
        inp.blur();
        button.innerHTML = 'Copied';
      } catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }
    }
  }
}
