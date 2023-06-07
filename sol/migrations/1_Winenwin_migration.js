var Winenwin = artifacts.require('Winenwin');

module.exports = function (deployer) {
    // deployment steps
    deployer.deploy(Winenwin, 'ipfs://bafybeigle5iey2qu3v6uypd26k65sw2smlevjjg5mrcuuswp5qdrspmkji', 'WinenTest', 'WTS');
};
