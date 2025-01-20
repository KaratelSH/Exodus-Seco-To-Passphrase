<h1 align="center" id="title">Exodus Passphrase Extractor 🔑</h1>

<p>This script is designed to <strong>extract the passphrase from your Exodus wallet 💼</strong> by attempting various passwords that you provide. It works by testing each password from a <code>passwords.txt</code> file and if it finds the correct one it decrypts the wallet and retrieves the passphrase.</p>

### **How It Works 🤔:**

1.  The script reads the encrypted wallet data from a `.seco` file.
2.  It then tries each password from the provided list (`passwords.txt`).
3.  If a password is correct it decrypts the file extracts the passphrase and returns it.
4.  If no password matches it will notify you that no matching password was found.

  

### **Requirements 📋:**

*   A `passwords.txt` file containing potential passwords to "bruteforce" (line by line).
*   `seed.seco` file containing your encrypted passphrase.

  

### **Where to Find the `seed.seco` File 📂:**

<p>You can obtain the <code>seed.seco</code> file by navigating to the following directory on your computer: <code>%appdata%/Exodus/exodus.wallet</code>.</p>

### **Important Notes 📝:**

*   Please ensure you have a legitimate reason to recover your wallet 🔍.
*   This tool is intended for **personal use only 🔒**.

  

<h2>🛠️ Installation Steps:</h2>

<p>1. Install all required modules (it will automatically install good versions)</p>

```
npm i
```

<p>2. Run the script</p>

```
node index.js
```
