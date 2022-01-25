import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"jared.neal43@gmail.com", password:"Abc32!"});
    assert.equal(loginToken.length,36);

});