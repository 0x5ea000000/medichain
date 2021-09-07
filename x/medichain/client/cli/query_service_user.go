package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sota/medichain/x/medichain/types"
	"github.com/spf13/cobra"
)

func CmdListServiceUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-service-user",
		Short: "list all serviceUser",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllServiceUserRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ServiceUserAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowServiceUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-service-user [index]",
		Short: "shows a serviceUser",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetServiceUserRequest{
				Index: args[0],
			}

			res, err := queryClient.ServiceUser(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
