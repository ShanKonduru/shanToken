var ShanToken = artifacts.require("../contracts/ShanToken.sol");

contract('ShanToken', function(accounts){
    var tokenInstance;

    it('Initialize Contract with valid Name', function(){
        return ShanToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name, 'Shan Token', 'the contract has valid name');
        });
    });

    it('Initialize Contract with valid Symbol', function(){
        return ShanToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.symbol();
        }).then(function(symbol){
            assert.equal(symbol, 'ShanT', 'the contract has valid symbol');
        });
    });

    it('Initialize Contract with valid Standard', function(){
        return ShanToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.standard();
        }).then(function(standard){
            assert.equal(standard, 'Shan Token v1.0.0', 'the contract has valid standard');
        });
    });

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