var ShanToken = artifacts.require("../contracts/ShanToken.sol");

contract('ShanToken', function(accounts){
    var tokenInstance;
    it('sets total supply upon deployment', function(){
        return ShanToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
           assert.equal (totalSupply.toNumber(), 100000, 'sets the total supply to 100000')
           return tokenInstance.balanceOf(accounts[0]);
        }).then(function (adminBalance) {
            assert.equal(adminBalance.toNumber(), 100000, 'it allocates the initial supply to admin account');
        });
    });
});