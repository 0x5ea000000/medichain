package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/sota/medichain/x/medichain/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group medichain queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdUserService())

	cmd.AddCommand(CmdCheckServiceUser())

	cmd.AddCommand(CmdCheckSharing())

	cmd.AddCommand(CmdListSharing())
	cmd.AddCommand(CmdShowSharing())

	cmd.AddCommand(CmdListServiceUser())
	cmd.AddCommand(CmdShowServiceUser())

	cmd.AddCommand(CmdListService())
	cmd.AddCommand(CmdShowService())

	cmd.AddCommand(CmdListUser())
	cmd.AddCommand(CmdShowUser())

	return cmd
}
