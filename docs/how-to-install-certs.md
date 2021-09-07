## How to install trusted certificates locally

There are a few ways to install local trusted certificates on your machine, The important end result is that there are two files `~/.certs/cert.pem` (the certificate) and `~/.certs/key.pem` (the public key). Read about how certificates work [here](http://www.steves-internet-guide.com/ssl-certificates-explained/) if you already have a self-signed and trusted certificate in this location, then skip this guide.

### Easy step-by-step guide to install and generate certificates locally

Install mkcert - [documentation](https://github.com/FiloSottile/mkcert)

```sh
brew install mkcert
```

Make sure the active directory is user folder and run the following:

```sh
$ mkdir ~/.certs

$ mkcert -install

$ mkcert -key-file ~/.certs/key.pem -cert-file ~/.certs/cert.pem localhost 127.0.0.1 ::1

```

Verify that two new files have appeared in the certs/ - folder
