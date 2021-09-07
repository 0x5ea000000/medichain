package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sota/medichain/x/medichain/types"
)

func CmdCreateService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-service [name] [url] [class] [isActive]",
		Short: "Create a new service",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsUrl, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsClass, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsIsActive, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateService(clientCtx.GetFromAddress().String(), argsName, argsUrl, argsClass, argsIsActive)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-service [index] [name] [url] [class] [isActive]",
		Short: "Update a service",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			argsName, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsUrl, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsClass, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsIsActive, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateService(clientCtx.GetFromAddress().String(), index, argsName, argsUrl, argsClass, argsIsActive)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-service [index]",
		Short: "Delete a service",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteService(clientCtx.GetFromAddress().String(), index)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
