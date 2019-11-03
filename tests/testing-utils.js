/* eslint-disable no-console, mocha/no-setup-in-describe */
const originalLogFunction = console.log;
let output;

export function suspendConsole() {
  output = '';
  console.log = (msg) => {
    output += msg + '\n';
  };
}

export function restoreConsole() {
  console.log = originalLogFunction; // undo dummy log function
  if (this.currentTest.state === 'failed') {
    console.log(output);
  }
}
/* eslint-enable no-console, mocha/no-setup-in-describe */
