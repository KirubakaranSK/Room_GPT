import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-try-it',
  templateUrl: './try-it.component.html',
  styleUrls: ['./try-it.component.scss']
})
export class TryItComponent implements OnInit{

    count:number=0;

    types: City[] | undefined;
    
    formGroup: FormGroup | undefined;
    selectedtype: any;

    ngOnInit() {
      this.types = [
          { name: 'Living room', code: 'lr' },
          { name: 'Dinig room', code: 'dm' },
          { name: 'Badroom', code: 'br' },
          { name: 'Office', code: 'of' },
          { name: 'Kitchen', code: 'kh' },
          { name: 'Basement', code: 'bm' },
          { name: 'Gaming room', code: 'gr' },
          { name: 'Outdoor patio', code: 'op' }
      ];
    }
    
}
