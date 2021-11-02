import { Component, OnInit } from '@angular/core';
import {Confirmable} from "../../decorators/confirmable.decorators";

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Confirmable({ title: 'Are you siur', html: 'Do you want to delete this item?', icon: 'warning'})
  deleteLogs(): void {
    //Code to delete your item
  }

}
