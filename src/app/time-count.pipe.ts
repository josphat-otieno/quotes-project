import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: number):number{
    let today:Date = new Date()
    let todayWithNoTime:any= new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference =Math.abs(value -todayWithNoTime)
    const secondsInDay=60*60*24;
    var dateDifferenceSeconds= dateDifference*0.001
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    if(dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;
    }else {
      return 0;
    }
   
  }

}
