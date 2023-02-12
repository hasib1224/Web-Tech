import { HttpClient } from '@angular/common/http';
import { Component,OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:` <h1>Helloo {{name}} {{name.length}} </h1>
              <h2 [style.color]="dis?'red':'green'">{{greetHasib()}}</h2> 
              <input [disabled] ="dis" [id]="myid" type="text" vslue="jk">
              <h1 class="text-success">Hasib</h1>
              <h1 [class]="successClass">Abdullah</h1>
              <h1 class="text-special"  [class]="successClass" >Sarker</h1>
              <h1 [ngClass]="msgClass" >Sarker24</h1>
              <input [(ngModel)]="var1" type="text" #data >
              <br>{{var1}}<br>
              <button (click)="logMsg(data.value)">log</button>
              
              <div *ngIf="displayName;then thenBlock;else elseBlock;"> </div>
              
              <ng-template #thenBlock>
                <h1> agin BACKKK</h1>
              </ng-template>

              <ng-template #elseBlock>
                <h1> gfhfh</h1>
              </ng-template>

              <h1 *ngIf="false">Hasibbb</h1>
              <h1 *ngIf="displayName">chupp</h1>

              <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">You Picked Red Color !! </div>
                <div *ngSwitchCase="'green'">You Picked green Color !! </div>
              </div>

              <div *ngFor="let col of colors; index as i;first as f; odd as o">
                <h2> {{o}} {{f}} {{i}} {{col}}</h2>
              </div>

              <h2>{{"hello " + name2}}</h2>
              <button (click)="fireEvent()">Send Event</button>
              
              <h2>{{date}}</h2> 
              <h2>{{date | date:'shortTime'}}</h2>

              


              
              
              `,
  
  styles: [ `
            .text-success{
              color:green;
            }
            .text-special{
              color:red;
            }
            .text-danger{
              font-style:italic;
            }
  `]
})
export class TestComponent implements OnInit {

  @Input('parentData') public name2="" ;
  @Output() public childEvent=new EventEmitter();


  private _url: string="/assets/data/employees.json"
  constructor(private http: HttpClient ){}
  ngOnInit() {
    
  }

  public color="red";
  public displayName=true;
  public name="JK";
  public var1="";
  public myid="testid";
  public dis=true;
  public hasError=true;
  public isSpecial=false;
  public successClass="text-success";
  public colors=["red","blue","green","yellow"];
  public date =new Date();

  public msgClass={
    "text-success": this.dis,
    "text-danger":this.hasError,
    "text-special":this.isSpecial


  }

  greetHasib(){
    return "Good afternoon Hasib"
  }

  getEmployees(){
    return this.http.get(this._url);
  }

  logMsg(item:any){
    console.log(item);
    
  }

  fireEvent()
  {
    this.childEvent.emit("Heyy from child");
  }



}
