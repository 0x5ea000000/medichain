#!/bin/sh
rm -Rf ~/.medichain
medichaind config keyring-backend test 
medichaind init $MONIKER --chain-id $CHAIN_ID --overwrite 
echo $VALIDATOR_MNEMONIC | medichaind keys add $VALIDATOR_ACCOUNT --hd-path "m/44'/118'/0'/0" --recover --interactive=false
medichaind add-genesis-account $VALIDATOR_ACCOUNT $AMOUNT
medichaind keys list
medichaind gentx $VALIDATOR_ACCOUNT 100000000stake --chain-id $CHAIN_ID
medichaind collect-gentxs
(sleep 10 && medichaind tx medipoint create-admin $ADMIN_PUBLICKEY --from $VALIDATOR_ACCOUNT --chain-id $CHAIN_ID -y) | medichaind start --rpc.laddr tcp://127.0.0.1:26657 --rpc.pprof_laddr tcp://127.0.0.1:8002 --grpc.address 0.0.0.0:9090