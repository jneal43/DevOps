import { expect } from "@jest/globals";
import { it } from "jest-circus";
import sayHello from '../utils/helloworld';

it("Should say hello", ()=>{
   const hello =  sayHello();

   expect(hello).toBe("hello");
});