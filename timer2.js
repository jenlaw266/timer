function beep() {
  process.stdout.write("\x07");
}

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") beep();
  if (key === "\u0003") {
    console.log("Thanks for using me,ciao!");
    process.exit();
  }
  if (!Number.isNaN(parseInt(key))) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => beep(), parseInt(key) * 1000);
  }
});
