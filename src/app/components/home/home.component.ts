import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';
import { hex } from '../../data/hex';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  submitForm = this.formBuilder.group({
    hash: ''
  });

  constructor(public convertService: ConvertService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  renderExample(index: number) {
    return this.convertService.toAscii(hex[index]);
  }

  onSubmit() {
    this.router.navigate(['/', this.submitForm.value.hash]);
  }

}
