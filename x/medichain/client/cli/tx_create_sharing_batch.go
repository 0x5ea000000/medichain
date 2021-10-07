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

func CmdCreateSharingBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sharing-batch [viewerIds] [ownerId] [status]",
		Short: "Broadcast message create-sharing-batch",
		Args:  cobra.MinimumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsViewerId := string(args[0])
			argsOwnerId := args[1 : len(args)-1]
			argsStatus := string(args[len(args)-1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSharingBatch(clientCtx.GetFromAddress().String(), string(argsViewerId), argsOwnerId, argsStatus)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
