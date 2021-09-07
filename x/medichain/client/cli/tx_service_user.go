package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sota/medichain/x/medichain/types"
)

func CmdCreateServiceUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-service-user [serviceId] [userId] [serviceUserId] [isActive]",
		Short: "Create a new serviceUser",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsServiceId, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsUserId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsServiceUserId, err := cast.ToStringE(args[2])
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

			msg := types.NewMsgCreateServiceUser(clientCtx.GetFromAddress().String(), argsServiceId, argsUserId, argsServiceUserId, argsIsActive)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateServiceUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-service-user [index] [serviceId] [userId] [serviceUserId] [isActive]",
		Short: "Update a serviceUser",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			argsServiceId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsUserId, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsServiceUserId, err := cast.ToStringE(args[3])
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

			msg := types.NewMsgUpdateServiceUser(clientCtx.GetFromAddress().String(), index, argsServiceId, argsUserId, argsServiceUserId, argsIsActive)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteServiceUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-service-user [index]",
		Short: "Delete a serviceUser",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteServiceUser(clientCtx.GetFromAddress().String(), index)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
