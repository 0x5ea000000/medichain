package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sota/medichain/x/medichain/types"
)

func CmdCreateSharing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sharing [ownerId] [viewerId] [status]",
		Short: "Create a new sharing",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsOwnerId, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsViewerId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsStatus, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSharing(clientCtx.GetFromAddress().String(), argsOwnerId, argsViewerId, argsStatus)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSharing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sharing [index] [ownerId] [viewerId] [status]",
		Short: "Update a sharing",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			argsOwnerId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsViewerId, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsStatus, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSharing(clientCtx.GetFromAddress().String(), index, argsOwnerId, argsViewerId, argsStatus)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSharing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sharing [index]",
		Short: "Delete a sharing",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSharing(clientCtx.GetFromAddress().String(), index)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
