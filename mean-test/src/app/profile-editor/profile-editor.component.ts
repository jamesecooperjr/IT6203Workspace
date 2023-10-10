import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([this.fb.control('')])
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  onZipChange() {
    const zipControl = this.profileForm.get('address.zip');
    if (zipControl) {
      const zip = zipControl.value;
      this.getCityByZip(zip);
    }
  }

  getCityByZip(zip: string) {
    const zipToCityMapping: { [key: string]: string } = {
      '30144': 'Kennesaw',
      '30152': 'Kennesaw',
      '30060': 'Marietta',
      '30061': 'Marietta',
      '30062': 'Marietta',
      '30063': 'Marietta',
      '30064': 'Marietta',
      '30065': 'Marietta',
      '30066': 'Marietta',
      '30067': 'Marietta',
      '30068': 'Marietta',
      '30069': 'Marietta',
      '30188': 'Woodstock',
      '30189': 'Woodstock',
    };

    const city = zipToCityMapping[zip] || 'Unknown';
    const cityControl = this.profileForm.get('address.city');
    if (cityControl) {
      cityControl.setValue(city);
    }
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
}
