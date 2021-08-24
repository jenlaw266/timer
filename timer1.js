const input = process.argv.slice(2);
let timer1 = null;

function beep() {
  process.stdout.write("\x07");
}

if (input.length !== 0) {
  for (const seconds of input) {
    if (seconds > 0 && !Number.isNaN(seconds)) {
      timer1 = setTimeout(() => {
        beep();
      }, parseInt(seconds) * 1000);
      timer1;
    } else {
      console.log("input is not a number");
    }
  }
} else {
  console.log("no input");
}
