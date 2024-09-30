const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068076201";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_54_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjEyMGFYYU10R0MwaGMvUkJNVWZ3WlorTGpsWjJhUEliNzNNR3FITFlydm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJiWjFPU2k3VFcybnV0Yk0tcURiN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODhkZmRhOTMtY2M2Zi00NmUxLTg2OGUtMGYxNDI3OTY4OGM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTk3LFxuICAgICAgMTQxLFxuICAgICAgMjUwLFxuICAgICAgMzAsXG4gICAgICAxMDMsXG4gICAgICA0OSxcbiAgICAgIDE2NCxcbiAgICAgIDIzMCxcbiAgICAgIDIzOSxcbiAgICAgIDkxLFxuICAgICAgMjIsXG4gICAgICAxNzMsXG4gICAgICA4NCxcbiAgICAgIDI0OSxcbiAgICAgIDEwMixcbiAgICAgIDIsXG4gICAgICAxNDQsXG4gICAgICAxNDMsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjksXG4gICAgICA3NCxcbiAgICAgIDE1NixcbiAgICAgIDYyLFxuICAgICAgMjMsXG4gICAgICAxMzgsXG4gICAgICA4OSxcbiAgICAgIDkzLFxuICAgICAgMjAsXG4gICAgICAyMjAsXG4gICAgICAxOSxcbiAgICAgIDIwOCxcbiAgICAgIDE3NixcbiAgICAgIDkxLFxuICAgICAgMjA0LFxuICAgICAgMTU2LFxuICAgICAgMjI0LFxuICAgICAgMjQyLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYyWFZGTVpNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4MDc2MjAxOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRXhjZWxsZW5jeSBEaWdpdGFsIEh1YlwiLFxuICAgIFwibGlkXCI6IFwiMTg5NDg1Mzg0MDAzNjI2OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMSjJMVUJFSlc4N0xjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibU45ekRXMEJ5Rkl1Z2pHWTl3eU9hY0NJNGR2V0tKR002cnNyQlJYZjFUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTbzhWUnhvQ0xUSGJqbFR1MEhsbmRXQmt6R1FUQUk0Yk9tTkdPVVNqeFRnR0QvdHp6RTJvam81dnp3c052WGFoamJSUEIrSWtlcnZ4aFdIbXBaWUlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsR29FZHdZZ1N1dFFCbjZqNkczSGFZeVVhVVdaYjhLOXM0KzUyWllUZHhJNklaUnRXTTJKYzhyUU9STEtWRzlTREs5T29oaXJpNndBWFR2VGVKWURoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MDc2MjAxOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3MzMyNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVEFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUQS5qc29uIjogIntcImtleURhdGFcIjpcInU2ZnY3WllrUG5RMzh1WlArT3p2WDYzb0FoVTNlS2pwQ0srbFdOOWdNVVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgxMDM1NjgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
