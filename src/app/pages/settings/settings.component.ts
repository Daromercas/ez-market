import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService
  ) { }
  ngOnInit(): void {
  }

}
