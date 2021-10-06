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

func CmdDeleteSharingBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sharing-batch [indexs]",
		Short: "Broadcast message delete-sharing-batch",
		Args:  cobra.MinimumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsIndexs := args[0:len(args)-1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSharingBatch(clientCtx.GetFromAddress().String(), argsIndexs)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
