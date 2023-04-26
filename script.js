const urls = [
  { name: 'Wallet Premium', url: 'https://api.chihuahua.wtf/cosmos/staking/v1beta1/delegations/chihuahua1avfdl66z7ce3v6drr49s84qfdw8jwq0s6jky9v' },
  { name: 'Wallet Zombies', url: 'https://rest-teritori.ecostake.com/cosmos/staking/v1beta1/delegations/tori1u0vepvps5h56l9hejccyg9x5aux3m557dl7g77' },
  { name: 'Wallet Punk Games Wallet', url: 'https://rest-teritori.ecostake.com/cosmos/staking/v1beta1/delegations/tori1g2nuu04v4ckhvknuadudcwz7dpefftzuud9839' },
  { name: 'Wallet Early Punk Games Wallet', url: 'https://rest-teritori.ecostake.com/cosmos/staking/v1beta1/delegations/tori1m7lst3e4e3nrgc4ftulryntstt4qx2zztvvmxh' },
  { name: 'Wallet Lottery MetaHuahua', url: 'https://rest.cosmos.directory/cosmoshub/cosmos/staking/v1beta1/delegations/cosmos1kgmlvpn4dja9zmknms0kpsv5pw3wkvfqcx0fqf' },
  { name: 'Wallet Metaverse Improvement', url: 'https://rest.cosmos.directory/cosmoshub/cosmos/staking/v1beta1/delegations/cosmos1j3jmy29n4svhrnmqqel4x89p44u55mtzn0nfhs' },
  { name: 'Wallet Marketing & Communication', url: 'https://rest.cosmos.directory/cosmoshub/cosmos/staking/v1beta1/delegations/cosmos1adxapj0y5gwlctlfh4f03weuy233l582ljlg26' },
  { name: 'Wallet PASG Airdrop', url: 'https://rest.cosmos.directory/cosmoshub/cosmos/staking/v1beta1/delegations/cosmos1u2fslkjzcrxn3cpu8dnkd2ugy7zalja7erj9ay' }
];


urls.forEach(urlObj => {
  fetch(urlObj.url)
    .then(response => response.json())
    .then(data => {
      const amount = Math.floor(parseFloat(data.delegation_responses[0].balance.amount) / 1000000);
      const premiumContainer = document.getElementById("Premium Column")
      const h3 = card.getElementsByTagName('H3')[0]
      h3.textContent = amount;
    })
    .catch(error => console.error(error));
});
