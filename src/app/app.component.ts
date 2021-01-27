import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'question2';
  numArray:any=[];
  numb:any;
  numb1:any=[];
  value:any=[]
val:any=[];
heading:any;

  ngOnInit() {
    this.submit();
  }
  Delete(i){

this.heading = `click Submit to get Result`

    this.val.splice(i,1);
    this.numb1.splice(i,1)
    this.numArray.splice(i, 1);
    this.value.splice(i+1,1)
    // console.log(this.value)

    for(let i=0;i<this.value.length;i++){
      this.val.push(`{phoneNumber${i+1}:${this.value[i]}}`)
    }

  }

  Add(x){
    this.numArray.push(x)
    
  }

  
  submit(){
    this.heading='';
    this.value=[];
    this.val =[];
  

    if(this.numb != undefined){
    this.value.push(
            this.numb
            )
    }
    if(this.numb1 != undefined){
      for(let i=0;i<this.numb1.length;i++){
            this.value.push(
              this.numb1[i]
              )
            }
          }

            // console.log(this.value)
    
            for(let i=0;i<this.value.length;i++){
              this.val.push(`{phoneNumber${i+1}:${this.value[i]}}`)
            }
            console.log(this.val)

  }

}
