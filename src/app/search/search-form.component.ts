import {Component, OnInit, ElementRef} from '@angular/core';
import {NgForm} from '@angular/common';
import {Router} from '@angular/router';

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
    this.programs = this.programService.programs;
  }

  onChange(programUrl: string): void {
    this.router.navigateByUrl(`/search?url=${encodeURIComponent(programUrl)}`);
  }
}
