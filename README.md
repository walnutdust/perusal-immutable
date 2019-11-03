# specjs

`specjs` implements a performant spec system for Javascript. To help with speed of verification, wrappers around immutable objects are also provided to retain metadata on the passing/failing specs. Inspired by Clojure's [spec/alpha](https://clojure.org/guides/spec).

## That's great, but what's a spec ?

See the FAQ. TL;DR: Specs provide run-time analysis and verification of the data structure with flexibility although at the cost of (some) run-time performance and the lack of compiler help.

## Working principle of specjs

**Definitions:**
A _predicate function_ is a function that is guaranteed to return a boolean true/false for inputs in within its operational domain.
A _specification_ comprises of one or many _predicate functions_.

## Design principles of specjs

1. Performance maintenance - implementation or usage of `specjs` should operate with similar performance guarantees.
1. Natural and easy expression - codebases that use `specjs` should be readable without being cumbersome.
1. Sufficiently expressive - `specjs` should enforce good behavior, not force users to work around it.
1. Help, rather than harm, the user - intuitive and expressive error messages.

## FAQ

### Okay, so what's a spec and how does it differ from static typing?

Static typing is used by programmers to help them reason about the program. Specifically, static typing offers the following benefits:

1. Minimisation of potential bugs - With static typing, the ability to introduce bugs in the program by calling the wrong method is significantly reduced.
1. Linter/Compiler help - The linter/compiler helps with the above point by inferring the types of arguments based on the methods that are called, and throws a warning when conflicting types are inferred for a variable, allowing errors to be detected at compile, rather than run-time.
1. Optimization - Certain languages allow for static typing information to be used by compilers to create optimized code.

Specs, on the other hand, performs run-time verification on the data, which offers:

1. Greater flexibility/expressiveness of checking - instead of sticking to given types and having to play with them, we can check that the data adheres to certain guidelines (e.g. is a prime, is either a function or a string, or has valid argument patterns (A, B, and C or B, D, and E). Arguably, when the data is more complicated, it becomes less intuitive to forcefully fit data into certain types, and types might not capture all the guarantees of the data structure anyways.
1. Optional checking - While enforced checking would stamp out bugs arising from invalid method calls, such a move severely limits the flexibility of expression in the language. Particularly, since Javascript itself is a dynamic language with no provisons for code optimization based on typing, a conventional type offering in this library does not do too much for the language (although tools like [Flow](https://flow.org/) and [Typescript](https://www.typescriptlang.org/) can be used!) We should work with the language features that are offered, rather than running counter to it - embracing Javascript's dynamism.

Refer to Clojure's [spec guide](https://clojure.org/about/spec) to see how people smarter than me reason about this.

### Why not use just Clojurescript?

Definitely! Clojurescript already a [spec library](https://clojure.org/guides/spec).

However, Clojurescript performs this checking from fresh as we build up a data structure, leading to unnecessary repetition of checks which may be costly.

### How much is the performance affected?

If we were only doing dynamic type checking via `typeof`, it takes only about ~1% more time, and scales linearly. For more complex arguments it is harder to argue about it, but note that most programs do end up explicitly checking inputs in some form or the other, be it nullable checks, or whether the input asserts to a certain usable specification. In those cases, `specjs` helps formalise the code, and offers programmers the capacity to say that given a input that satisfies a certain spec, there will always be output of a certain spec?

To further improve performance, `specjs` also offers an immutable version of itself, which wraps immutable data types from `immutable.js` with metadata that tracks the specs that a certain object has fulfilled. In this manner, if the programmer strictly uses the provided wrappers, we skip repetitive checking and get a huge performance boost if the same data is used in multiple areas.

**_Benchmarks_**

**Simple Type Checking**

```
const {performance} = require('perf_hooks');

const n = 100000000;
let test;

const t0 = performance.now();
for (let i = 0; i < n; i++) {
  test = 'test';
}
const t1 = performance.now();
console.log(`Declaring a string took ${(t1 - t0) / n} milliseconds on average.`);
// Declaring a string took 8.706519499421119e-7 milliseconds on average.

const t2 = performance.now();
for (let i = 0; i < n; i++) {
  typeof 'test' === 'string';
}
const t3 = performance.now();
console.log(`Checking string type took ${(t3 - t2) / n} milliseconds on average.`);
console.log(`Checking a string took ${((t3 - t2) / (t1 - t0)).toPrecision(3)}% more time.`);const n = 10000000;
const t0 = performance.now();
for (let i = 0; i < 10000000; i++) {
  typeof 'test' === 'string';
}
const t1 = performance.now();
console.log('Checking string type took ' + (t1 - t0) / n + ' milliseconds on average.');
// Checking string type took 8.643735998868942e-7 milliseconds on average.
// Checking a string took 0.993% more time.
```

**Imutable types usage performance boost**

// TODO

## When should I use/ not use this library?

// TODO

## Are there alternatives?

Sure! Look at [js.spec](https://github.com/prayerslayer/js.spec) or [speculaas](https://github.com/mrijk/speculaas).

## Sprint 0.5?

1. Find documentation guidelines

## Future Sprints

1. `coll`, `every`
1. function spec.
1. Pretty-printing inputs (elm-style, map is hidden except for relevant entries.)
1. Prettier pre-config hook.
1. User handling of error logging.
1. Generator

## License

This project is licenced under the MIT Licence.
