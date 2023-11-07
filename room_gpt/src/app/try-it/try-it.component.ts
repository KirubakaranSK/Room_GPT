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

    tick1:boolean=false
    tick2:boolean=false
    tick3:boolean=false
    tick4:boolean=false
    tick5:boolean=false
    tick6:boolean=false
    tick7:boolean=false
    tick8:boolean=false
    tick9:boolean=false

  count_img1(){
  if(this.count < 4){
      if(this.tick1 == true){
        this.tick1=false;
        this.count-=1;}
    else{
    this.tick1=true;
    this.count+=1;}
  }
}

  count_img2(){
  if(this.count < 4){
    if(this.tick2 == true){
      this.tick2=false;
      this.count-=1;}
  else{
  this.tick2=true;
  this.count+=1;}

  }
}
count_img3(){
  if(this.count < 4){
  if(this.tick3 == true){
    this.tick3=false;
    this.count-=1;}
else{
this.tick3=true;
this.count+=1;}
}
}

count_img4(){
  if(this.count < 4){
  if(this.tick4 == true){
    this.tick4=false;
    this.count-=1;}
else{
this.tick4=true;
this.count+=1;}
}
}
count_img5(){
  if(this.count < 4){
  if(this.tick5 == true){
    this.tick5=false;
    this.count-=1;}
else{
this.tick5=true;
this.count+=1;}
}
}

count_img6(){
  if(this.count < 4){
  if(this.tick6 == true){
    this.tick6=false;
    this.count-=1;}
else{
this.tick6=true;
this.count+=1;}
}
}


count_img7(){
  if(this.count < 4){
  if(this.tick7 == true){
    this.tick7=false;
    this.count-=1;}
else{
this.tick7=true;
this.count+=1;}
}
}

count_img8(){
  if(this.count < 4){

  if(this.tick8 == true){
    this.tick8=false;
    this.count-=1;}
else{
this.tick8=true;
this.count+=1;}
}

}

count_img9(){
  if(this.count < 4){
  if(this.tick9 == true){
    this.tick9=false;
    this.count-=1;}
else{
this.tick9=true;
this.count+=1;}
}
}


}
