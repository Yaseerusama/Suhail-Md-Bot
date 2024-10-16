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



global.devs = "2349068076201" // Developer Contact
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

  sessionName:process.env.SESSION_ID || "SUHAIL_21_16_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxsdThtVmMyY0t2WlpzQUJqem1hR1NQSGx3bVBVV1lGSVV3QTBUUGJ6NDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhhSU5LbnhjUnlxRDlwcDlCZkdSY0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDNiOGIxMDAtODg3ZS00ZDA1LTkyYjctYjhhN2U1ZjU4ZjM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgODUsXG4gICAgICA1NSxcbiAgICAgIDE3MSxcbiAgICAgIDM2LFxuICAgICAgMjQwLFxuICAgICAgNzYsXG4gICAgICA3NyxcbiAgICAgIDE1LFxuICAgICAgMjA3LFxuICAgICAgNzcsXG4gICAgICA5MCxcbiAgICAgIDE1OCxcbiAgICAgIDQzLFxuICAgICAgMTMsXG4gICAgICAyMTgsXG4gICAgICAyNCxcbiAgICAgIDIyOCxcbiAgICAgIDY4LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTM3LFxuICAgICAgMTQ5LFxuICAgICAgOTgsXG4gICAgICAxNjgsXG4gICAgICA3NyxcbiAgICAgIDUwLFxuICAgICAgMTE1LFxuICAgICAgMjUwLFxuICAgICAgMTI0LFxuICAgICAgMTAzLFxuICAgICAgMTkyLFxuICAgICAgMTUwLFxuICAgICAgMjQzLFxuICAgICAgMTg3LFxuICAgICAgMTA1LFxuICAgICAgMTMyLFxuICAgICAgMjQ5LFxuICAgICAgMTk0LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhCQk42MkgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4MDc2MjAxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRXhjZWxsZW5jeSBEaWdpdGFsIEh1YlwiLFxuICAgIFwibGlkXCI6IFwiMTg5NDg1Mzg0MDAzNjI2OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQSjJMVUJFTFBhd0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibU45ekRXMEJ5Rkl1Z2pHWTl3eU9hY0NJNGR2V0tKR002cnNyQlJYZjFUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBVkRhOEYrejRMZGRsdkQ1eTZ1ZjkrU25JN0s4U3VDRlRJY1F0UFpYWUpsMGNWUEMzTGNTN3NGU1UxL0pSTThlSGtSMWxkdjM1V2pNV1U3TGk2ZnNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMOGh6NWRZYzBaRTBmZDlGK0VMK0g1ckw3WUIvTHk4czZqa1ZoWDRDSHBCZTBaRGRGTGFUVzIvTndFTUlyMlMwcmlrRktFTXFoMitQZ1VORzV3Y2JDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MDc2MjAxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkxMTMzOTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
