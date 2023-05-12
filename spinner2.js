let arr = ["|", "/", "-", "\\","|", "/", "-", "\\","|"];
let i = 100;
for (let item of arr) {
  setTimeout((i) => {
    //console.log(item);
    process.stdout.write('\r' + item);
  }, i);
  i += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, 1900);