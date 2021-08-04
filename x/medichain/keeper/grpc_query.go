package keeper

import (
	"github.com/sota/medichain/x/medichain/types"
)

var _ types.QueryServer = Keeper{}
