// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import SotaMedichainSotaMedichainMedichain from './sota/medichain/sota.medichain.medichain'


export default { 
  SotaMedichainSotaMedichainMedichain: load(SotaMedichainSotaMedichainMedichain, 'sota.medichain.medichain'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
