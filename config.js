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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349068076201";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_06_09_09_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzVzSVcrejdqdmQwMkVDczFZeEw0b1JhcjR3VUhPWDZYcFpzMTNkQW9NST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODRtWUtqLXhTRFdhUEZ2Ujg5THhBQVwiLFxuICBcInBob25lSWRcIjogXCIwM2QyZTg0Zi05NTNkLTRhOTgtODMwNC1mYjA1YjNlOTk0NTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAzNyxcbiAgICAgIDE2LFxuICAgICAgMTgsXG4gICAgICA4MixcbiAgICAgIDIxMSxcbiAgICAgIDEwMCxcbiAgICAgIDIzNSxcbiAgICAgIDI0OSxcbiAgICAgIDQsXG4gICAgICA1NyxcbiAgICAgIDEzNixcbiAgICAgIDEzNyxcbiAgICAgIDEzMCxcbiAgICAgIDAsXG4gICAgICAxNTEsXG4gICAgICAzMixcbiAgICAgIDE0NCxcbiAgICAgIDY5LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICA2MSxcbiAgICAgIDIxMCxcbiAgICAgIDE3OSxcbiAgICAgIDgyLFxuICAgICAgMjAyLFxuICAgICAgMTE4LFxuICAgICAgMTY3LFxuICAgICAgMixcbiAgICAgIDIwNyxcbiAgICAgIDk1LFxuICAgICAgMTY3LFxuICAgICAgMSxcbiAgICAgIDczLFxuICAgICAgMTc2LFxuICAgICAgNDAsXG4gICAgICAxNDYsXG4gICAgICAyMDEsXG4gICAgICA0OSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVHOTVDODhaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4MDc2MjAxOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRXhjZWxsZW5jeSBEaWdpdGFsIEh1YlwiLFxuICAgIFwibGlkXCI6IFwiMTg5NDg1Mzg0MDAzNjI2OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tISjJMVUJFS09NeExjR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibU45ekRXMEJ5Rkl1Z2pHWTl3eU9hY0NJNGR2V0tKR002cnNyQlJYZjFUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJU3QrbXVVMHZPSldMSHJ5SFJYOW5qTUtHNDhjVjlPbjlUL1dJOVpaN0U3ci8rZDJSTDAyblZ5L3k3U1Z4eXBrQmthSWtMUnJqamI3bmtKd0xkNU5DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXVGRWY0RYb1dML0wxOWMrcDNYYnBEbG91ZkJSUTJ0ODB6NmU1WVVXTVdPcDVXTEV1UU5aeUc0em40UWJHK2hLRndzcGFBYktySitZSFN6bHZldzZEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MDc2MjAxOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcwNzE3ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVEFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUQS5qc29uIjogIntcImtleURhdGFcIjpcInU2ZnY3WllrUG5RMzh1WlArT3p2WDYzb0FoVTNlS2pwQ0srbFdOOWdNVVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgxMDM1NjgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
