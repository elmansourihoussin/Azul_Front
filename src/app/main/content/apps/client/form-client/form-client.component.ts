import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  typeClient!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.typeClient = value
  }

  goBack() {
    this.router.navigate(['./apps/list-clients'])
  }

}
