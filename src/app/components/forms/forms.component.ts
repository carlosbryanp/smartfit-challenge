import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  results = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.unitsService
      .getAllUnits()
      .subscribe((location) => console.log(location));
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  onClean() {
    this.formGroup.reset;
  }
}
