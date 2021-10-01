#!/bin/sh
medichaind init ${MONIKER} --chain-id ${CHAIN_ID}
for 
medichaind add-genesis-account ${GENESIS_ACCOUNT} ${AMOUNT}
echo ${MNEMONIC} | medichaind keys add validator1 --recover --interactive=false
medichaind gentx validator1 100000000stake --chain-id ${CHAIN_ID}