import { testFunc } from "@chuni-tools/utils";

type MyType = {
  foo: string;
  bar: number;
};

const myObject: MyType = {
  foo: "Hello",
  bar: 42,
};

console.log(myObject);

testFunc("Hello, World!");
