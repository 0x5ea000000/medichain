package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		SharingList:     []*Sharing{},
		ServiceUserList: []*ServiceUser{},
		ServiceList:     []*Service{},
		UserList:        []*User{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated index in sharing
	sharingIndexMap := make(map[string]bool)

	for _, elem := range gs.SharingList {
		if _, ok := sharingIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for sharing")
		}
		sharingIndexMap[elem.Index] = true
	}
	// Check for duplicated index in serviceUser
	serviceUserIndexMap := make(map[string]bool)

	for _, elem := range gs.ServiceUserList {
		if _, ok := serviceUserIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for serviceUser")
		}
		serviceUserIndexMap[elem.Index] = true
	}
	// Check for duplicated index in service
	serviceIndexMap := make(map[string]bool)

	for _, elem := range gs.ServiceList {
		if _, ok := serviceIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for service")
		}
		serviceIndexMap[elem.Index] = true
	}
	// Check for duplicated index in user
	userIndexMap := make(map[string]bool)

	for _, elem := range gs.UserList {
		if _, ok := userIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for user")
		}
		userIndexMap[elem.Index] = true
	}

	return nil
}
