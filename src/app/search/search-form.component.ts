import {Component, OnInit, ElementRef} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router} from 'angular2/router';

import {Program, ProgramService} from '../services/program.service';

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [NgForm],
  providers: [ProgramService],
  selector: 'search-form',
  styleUrls: ['app/search/search-form.component.css'],
  templateUrl: 'app/search/search-form.component.html'
})
export class SearchFormComponent implements OnInit {
  programs: Program[];

  constructor (
    private router: Router,
    private programService: ProgramService,
    private em: ElementRef
  ) {}

  ngOnInit(): void {
    this.programService.getPrograms().subscribe((programs: Program[]) => {
      this.programs = programs;
    });
  }

  find(programName: string): void {
    for (let p of this.programs) {
      if (programName === p.name) {
        this.router.navigate(['Search', { url: encodeURIComponent(p.url) }]);
      }
    }
  }
}
