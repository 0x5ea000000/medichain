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

func CmdUpdateSharingStatusBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sharing-status-batch [indexs] [status]",
		Short: "Broadcast message update-sharing-status-batch",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsIndexs := args[0:len(args)-1]
			argsStatus := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSharingStatusBatch(clientCtx.GetFromAddress().String(), argsIndexs, string(argsStatus))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
