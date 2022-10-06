/**
 *      💬 discord ['https://discord.gg/Jsmbn79Q4Y']
 * 
 *      🐌 @Copyright JJ COPYX?
 *      😣 ในนี้ไม่มีอะไรเล๊ยๆๆ ประกาศตัวแปรดังกว่าเพื่ออะไรเราไม่ทราบ!!!!!
 * 
 *      อ่านวิธีใช้ ที่ H.MD เด้อ
 */

configdiscord = {
    ticket: true, // เปิด ปิด ส่ง [LOGS]
    webhook: {
        token: "Iy48A50F2MGiuX1I9DRWUMi5z4j5YfQF4TZar2ryuZaSfBz2ua8q-SzSXcCaSwifNUgm", // TOKEN ของ WEBHOOK
        id: "1020706037499699252" // ID ของ WEBHOOK
    },
    // ตกแต่งหน้าตาของ EMBEDs
    embedsDeposit: {
        title: "ggege",

        /**
         * ในส่วนที่หากต้องการใส่ ชื่อผู้โอน ไอดี เงิน(จำนวนเงิน) 
         * @Parameters
         * @Example `NAME: ${Player.name} ID: ${Player.playerId} AMOUNT: ${amount}`
         * จำเป็นต้องทำแบบตัวอย่างหากต้องการโชว์ข้อมูลต่างๆ
         */
        description: `gawe ${a.player}`,
        color: 7352991,
        footer: {
            text: "gawe",
            icon_url: "https://i.imgur.com/AfFp7pu.png"
        },
        image: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        timestamp: new Date().toISOString()
    },
    // ตกแต่งหน้าตาของ EMBEDS
    embedsWithdraw: {
        title: "",

        /**
         * ในส่วนที่หากต้องการใส่ ชื่อผู้ถอน ไอดี เงิน(จำนวนเงิน) 
         * @Parameters
         * @Example `NAME: ${Player.name} ID: ${Player.playerId} AMOUNT: ${amount}`
         * จำเป็นต้องทำแบบตัวอย่างหากต้องการโชว์ข้อมูลต่างๆ
         */
        description: "",
        color: 7352991,
        footer: {
            text: "",
            icon_url: ""
        },
        image: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        timestamp: new Date().toISOString()
    },

}