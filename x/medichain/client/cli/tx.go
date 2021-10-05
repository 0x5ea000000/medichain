package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sota/medichain/x/medichain/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1
	cmd.AddCommand(CmdCreateSharingBatch())

	cmd.AddCommand(CmdCreateAdmin())
	cmd.AddCommand(CmdUpdateAdmin())
	cmd.AddCommand(CmdDeleteAdmin())

	cmd.AddCommand(CmdRejectSharing())

	cmd.AddCommand(CmdAcceptSharing())

	cmd.AddCommand(CmdCreateSharing())
	cmd.AddCommand(CmdUpdateSharing())
	cmd.AddCommand(CmdDeleteSharing())

	cmd.AddCommand(CmdCreateServiceUser())
	cmd.AddCommand(CmdUpdateServiceUser())
	cmd.AddCommand(CmdDeleteServiceUser())

	cmd.AddCommand(CmdCreateService())
	cmd.AddCommand(CmdUpdateService())
	cmd.AddCommand(CmdDeleteService())

	cmd.AddCommand(CmdCreateUser())
	cmd.AddCommand(CmdUpdateUser())
	cmd.AddCommand(CmdDeleteUser())

	return cmd
}
