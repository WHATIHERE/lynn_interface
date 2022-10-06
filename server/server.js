/**
 *      💬 discord ['https://discord.gg/Jsmbn79Q4Y']
 * 
 *      🐌 @Copyright JJ COPYX?
 *      😣 ในนี้ไม่มีอะไรเล๊ยๆๆ ประกาศตัวแปรดังกว่าเพื่ออะไรเราไม่ทราบ!!!!!
 */

let ESX = null

const task = "BANK"

emit('esx:getSharedObject', (obj) => {
    ESX = obj
})



RegisterCommand('jj_aa', async (source) => {

    if(configdiscord.ticket){
        var _URL = `https://discord.com/api/webhooks/${configdiscord.webhook.id}/${configdiscord.webhook.token}`
        console.log('\033[34m WEBHOOK TO')
        console.log(`${configdiscord.embedsDeposit.description}`)
        let e = {
            color: configdiscord.embedsDeposit.color,
            description: configdiscord.embedsDeposit.description,   
            image: configdiscord.embedsDeposit.image,
            footer: {
                text: configdiscord.embedsDeposit.footer.text,
                icon_url: configdiscord.embedsDeposit.footer.icon_url
            },
            timestamp: configdiscord.embedsDeposit.timestamp
        }
        let _body = {
            embeds: [e]
        }
        emit('QualityNetworkServers', _URL, 'POST', _body)
    }else {
        
        let e = {
            color: 0x0099ff,
            description: `JJJ OFF`,
        }
        let _body = {
            embeds: [e]
        }
        emit('QualityNetworkServers', _URL, 'POST', _body)
        console.log(task,'off webhook')
    }
})

RegisterNetEvent('jjbank:deposit')
onNet('jjbank:deposit', (amount) => {
    let _source = source;
    let Player = ESX.GetPlaterFromId(_source)

    if(amount == null || amount <= 0 ||amount > Player.getMoney()) {
        // notify
    }
    else {
        Player.removeMoney(parseInt(amount))
        Player.addAccountMoney('bank', parseInt(amount))
        if(configdiscord.ticket){
            console.log('on webhook')
        }else {
            console.log('off webhook')
        }
    }
})




RegisterNetEvent('jjbank:withdraw')
onNet('jjbank:withdraw', (amount) => {

})

