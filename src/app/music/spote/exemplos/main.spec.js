import {expect} from "chai"
import { search,searchalbum,searchartist } from "../main"
import Sinon from "sinon"
import { global } from "styled-jsx/css"


const fetchedstub =sinon.stub(global,`fetch`)
fetchedstub.returnsPromise();
const artist=search()
describe( `spote`),()=>{
   describe( `smoke-test`),()=>{
   }
}


describe( `generic search`),()=>{
    let fetchstub;
    it (`should call fetch function,`())

    beforeEach(()=>{fetchstub=Sinon.stub(global,`fetch`)});
    promise=fetchstub.returnsPromise();
    afterEach(()=>{fetchstub.restore();
    })
}
it( `should call fetched function`),()=>{


    const artist=search()
    expect().to.have.been.calledOnce

    
}
it (`should call fetch function the correct url`,()=>{
context(`passing type`),()=>{
const fetchedstub =sinon.stub(global,`fetch`)  
const artist=artist(`kkk`,`artist`)
expect(fetchedstub).to.have.been
.calledWith(`	https://api.spotify.com/v1/me`)
fetchedstub.restore();

}
const fetchedstub =sinon.stub(global,`fetch`)  

const album=album(`kkk`,`album`)
expect(fetchedstub).to.have.been
.calledWith(`	https://api.spotify.com/v1/me`)
fetchedstub.restore();


})
context(`passing more types`),()=>{
  
    const artistaandalbum=artistaandalbum(`kkk`,[`album`,`artist`])
    expect(fetchedstub).to.have.been
    .calledWith(`	https://api.spotify.com/v1/me&type=artist,album`)
    fetchedstub.restore();

}
it (`should the json data from the promise`,()=>{
promise.resolve(`body:json`);
const artist=search(`kkk`,`artist`)
expect(artist.resolve).to.be.eql(`body:json`)
}

)
context(`passing more types`),()=>{
    it (`should call fetch function`,()=>{
    const artist=searchartist(`kkk`)
    expect(fetchedstub().to.have.been.calledWith(`	https://api.spotify.com/v1/me=artist`)
    )
    context(`search album`),()=>{
        const album=searchalbum(`kkkk`)
        expect(fetchedstub)
    }
    context(`search track`),()=>{
        const track=searchtrack(`kkkk`)
        expect(fetchedstub)
    }
    context(`search playlist`),()=>{
        const playlist=searchplaylist(`kkkk`)
        expect(fetchedstub)
}
    }
    )

}




















