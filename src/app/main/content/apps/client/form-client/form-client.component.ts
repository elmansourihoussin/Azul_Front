import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  step = 0;
  typeClient!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.typeClient = value
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
