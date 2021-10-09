package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sota/medichain/x/medichain/types"
)

var _ = strconv.Itoa(0)

func CmdCreateServiceUserBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-service-user-batch [userId] [serviceIds]",
		Short: "Broadcast message create-service-user-batch",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsUserId := string(args[0])
			argsServiceIds := args[1 : len(args)]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateServiceUserBatch(clientCtx.GetFromAddress().String(), string(argsUserId), argsServiceIds)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
