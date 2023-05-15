import chai, { expect } from "chai";
import { playlist } from "../main";
import { getalbum, getalbumtracks, getalbums } from "../album";
import Sinon from "sinon";
import sinonChai from "sinon-chai";
global.fetch = require(`node-fetch`);
chai.use(sinonChai);
let stubedfetch;
describe(`album`), () => {
    beforeEach(() => {
        stubedfetch = Sinon.stub(global, `fetch`);
    });
    afterEach(() => {
        stubedfetch.restore();
    });

    describe(`smoke test`, () => {
        it(`should have getalbum method`, () => {
            expect(getalbum).to.exist;
        });
    });
};
describe(`smoke test`, () => {
    it(`should have getalbumtracks  method`, () => {
        expect(getalbumtracks).to.exist;
    });
});
describe(`smoke test`, () => {
    it(`should have getalbums  method`, () => {
        expect(getalbums).to.exist;
    });
});

{
    describe.use(sinonChai), () => {
        beforeEach(() => {});
        describe(`playlist`);
        beforeEach(() => {});
        describe(`smoke test`, () => {
            it(`should have playlist method`, () => {
                expect(playlist).to.exist;
            });
        });
    };
    describe(`smoke test`, () => {
        it(`should have playlist  method`, () => {
            expect(playlist).to.exist;
        });
    });
    describe(`smoke test`, () => {
        it(`should have search  method`, () => {
            expect(playlist).to.exist;
        });
    });
}