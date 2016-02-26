import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'slot-report',
  providers: [AdzerkManagementAPI],
  templateUrl: 'app/report/components/slot.html',
  styleUrls: ['app/report/components/slot.css']
})
export class SlotReport implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
