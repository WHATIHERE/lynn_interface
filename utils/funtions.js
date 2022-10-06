function a() {
    emit('esx:getSharedObject', (obj) => {
        ESX = obj
    })
    
    let a = source;
    let Player = ESX.GetPlayerFromId(a)
    console.log(`${Player.name}`)
}

