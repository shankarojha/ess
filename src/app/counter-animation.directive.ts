import { Directive, ElementRef, OnInit, Input, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounterAnimation]',
})
export class CounterAnimationDirective implements OnInit, OnDestroy {
  @Input('appCounterAnimation') upto


  public startingValue = 0
  public scrolltop = document.documentElement.scrollTop
  public documentHeightFromTop = document.getElementById('whoweare').getBoundingClientRect().top;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    console.log(this.documentHeightFromTop)
  }
   @HostListener("window:scroll", ['$event']) scrollFunction(){
     if(document.documentElement.scrollTop>this.documentHeightFromTop-500 || document.documentElement.scrollTop<=0){
       this.counter()
     }else{
       
     }
   }
  
    public counter=()=>{
      if(this.startingValue<this.upto) {
        this.startingValue+=1;
        this.el.nativeElement.innerHTML = this.startingValue;
        setTimeout(this.counter,1)
      }
    }
  
  
  

  ngOnDestroy(){}
}
