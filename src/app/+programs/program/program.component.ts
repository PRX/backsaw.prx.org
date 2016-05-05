import {Component, Input, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Program, Episode} from '../';
import {FeedParserService} from '../../shared';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'program',
  styleUrls: ['./program.component.css'],
  templateUrl: './program.component.html'
})
export class ProgramComponent implements OnInit {
  @Input() program: Program;

  episodes: Observable<Episode[]>;

  constructor(
    private feeds: FeedParserService
  ) {}

  ngOnInit(): void {
    if (this.program) {
      this.episodes = this.feeds.episodesForProgram(this.program);
    }
  }
}
