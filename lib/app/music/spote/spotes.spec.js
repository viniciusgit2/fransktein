
import { describe, it } from "node:test";
import { expect } from "chai";
import { spotes } from "./spotes";
describe(`spotes,(should be an object)`, () => expect('spotes').to.be.on.object);
it(`should have search methods`, () => {
    expect(spotes.search).to.exist;
});