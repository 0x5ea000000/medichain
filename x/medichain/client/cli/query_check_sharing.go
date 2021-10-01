package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sota/medichain/x/medichain/types"
)

var _ = strconv.Itoa(0)

func CmdCheckSharing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "check-sharing [ownerId] [viewerId]",
		Short: "Query checkSharing",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqOwnerId := string(args[0])
			reqViewerId := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryCheckSharingRequest{

				OwnerId:  string(reqOwnerId),
				ViewerId: string(reqViewerId),
			}

			res, err := queryClient.CheckSharing(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
