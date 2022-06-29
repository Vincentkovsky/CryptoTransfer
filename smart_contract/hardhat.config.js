require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Y4qVKPg7yOK7-if62dEpNkTaIgWruaK6',
      accounts: [
        'a972322d1ff0aa09cab1167aa907fdf3cd6948c29e406fe72c59b02a2d81dab3',
      ],
    },
  },
};
