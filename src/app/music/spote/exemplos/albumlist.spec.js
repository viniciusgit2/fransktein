import { expect } from "chai";
import { describe } from "node:test";
import renderalbum from  "albumlist"
describe(`albumlist`,()=>{
it (`should exist`,()=>{
expect (renderalbum).to.exist
})
})