class Clock {
  constructor() {
    let date = new Date();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    window.setInterval( () => {
      this._tick();}, 1000);
    }

    printTime() {
      let seconds = `0` + this.seconds
      let other = seconds.slice(seconds.length - 2, seconds.length)
      let time = `${this.hours} : ${this.minutes} : ${other}`;
      console.log(time);
    }

    _tick() {
      this.seconds += 1;

      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = this.seconds % 60;
      };

      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = this.minutes % 60;
      };

      this.printTime();
    }
}

let clock = new Clock();
