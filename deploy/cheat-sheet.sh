DOCKER_BUILDKIT=1 docker build -t chain:test .
DOCKER_BUILDKIT=1 docker-compose up -d --force-recreate --build

rm -Rf ~/.medichain
medichaind init test-node --chain-id my-test-chain
medichaind keys import validator1 ./validator1.priv
#validator1
medichaind add-genesis-account medichain129dulx4ryrx9revaljg84q34kekdqxj9prgsd9 10000000000000token,100000000000stake
#validator2
medichaind add-genesis-account medichain1dmh86ctqvcprf3zkvguckt7rv2u462jevfawxp 10000000000000token,100000000000stake



medichaind gentx my_validator 100000000stake --chain-id my-test-chain
medichaind collect-gentxs
medichaind start


medichaind keys add validator2 --dry-run

medichaind keys export validator1
medichaind tx bank send my_validator medichain1eee08ql4lag638c0t7ez6qzca8zr4n6wefjawy 10token -y --chain-id my-test-chain
medichaind keys add account-a --keyring-backend test  --dry-run
medichaind tx medichain create-user medichain1eee08ql4lag638c0t7ez6qzca8zr4n6wefjawy true --from my_validator -y --chain-id my-test-chain
medichaind query medichain list-user



- name: validator-1
  type: local
  address: medichain129dulx4ryrx9revaljg84q34kekdqxj9prgsd9
  pubkey: medichainpub1addwnpepq0xphyl9cksy8a4svyt03pn25zm39xw0l9y7gdahgfwrldkauuwgk3utgr2
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

useless axis uphold aisle wealth place style transfer prize tumble scissors wreck method face hint tuna cart budget text clay office hybrid view daring



- name: validator-2
  type: local
  address: medichain1dmh86ctqvcprf3zkvguckt7rv2u462jevfawxp
  pubkey: medichainpub1addwnpepqtgxz86cqukldp5wpfng3akks4dunshuftcuj3adg2yqazmv3fj96qcgmhr
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

major pride rotate material level suffer animal ozone guess praise garbage quote dove earth smile morning awkward rebel country pitch foil delay need wet
