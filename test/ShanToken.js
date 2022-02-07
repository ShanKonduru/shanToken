var ShanToken = artifacts.require("../contracts/ShanToken.sol");

contract('ShanToken', function(accounts){
    it('sets total supply upon deployment', function(){
        return ShanToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
           assert.equal (totalSupply.toNumber(), 100000, 'sets the total supply to 100000')
        });
    });
})
