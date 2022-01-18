//import { expect } from "@jest/globals";
//import { it } from "jest-circus";
import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Should say hello", ()=>{
   const hello = sayHello();
   assert.equal(hello, "hello");
});