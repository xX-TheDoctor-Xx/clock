import { SplitNumber } from "./util";

export class Time
{
    date: Date = new Date();
    //showSeconds: boolean = false;

    H1: number = 0;
    H2: number = 0;
    M1: number = 0;
    M2: number = 0;

    update()
    {
        this.date = new Date();

        //if (!this.showSeconds)
        //{
            var hours = this.date.getHours();
            var hoursArr = SplitNumber(hours);

            var minutes = this.date.getMinutes();
            var minutesArr = SplitNumber(minutes);
            this.H1 = hoursArr[0];
            this.H2 = hoursArr[1];
            this.M1 = minutesArr[0];
            this.M2 = minutesArr[1];
        //}
        //else
        // {
        //     var seconds = SplitNumber(this.date.getSeconds());
        //     this.H1 = seconds[0];
        //     this.H2 = seconds[1];

        //     var milliseconds = SplitNumber(this.date.getMilliseconds());
        //     this.M1 = milliseconds[0];
        //     this.M2 = milliseconds[1];
        // }
    }
}