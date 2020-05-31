# Passfile: End-to-End file encryption tool

([Japanese version](readme.ja.md))

Passfile is a simple file encryption/decryption web application that works in browser and no need any server functions. Passfile supports Public-key authenticated encryption. You don't need to worry about sharing password.

## Public-key authenti.. what?

Sharing encryption key is not easy.   
In Passfile, 

1. A recipient generates Public-Code and Secret-Code pair, then sending Public-Code to file sender.
2. The sender encrypts files by the Public-Code, then sending encrypted file.
3. The recipient can decrypt the encrypted file by Secret-Code.

It is like magic, no one can decrypt it if Public-Code and encrypted file are stolen.

**The encryption library is [TweetNaCl](https://tweetnacl.js.org/). Thanks.**

## Usage

Open here  
https://suzulabo.github.io/passfile/

## Code Generation

Used by a recipient.  
Generating Secret-Code and Public-Code pair. You only have to store the Secret-Code safe. Public-Code can be stolen. Just sharing it with a sender.  
You can add passphrase it is RECOMMENDED. This protects when Secret-Code is compromised.

## Encryption

Used by a sender.  
Encrypting files by Public-Code. You can add multiple files in a encrypted file.

**No file size limit is made. It depends on devices. Normally up to 100MB is no problem.**

## Decryption

Used by a recipient.  
Decrypting a encrypted file by the Secret-Code and passphrase if you added.  
After sharing files finished, you should delete Secret-Code. This protects if the encrypted file is compromised.
