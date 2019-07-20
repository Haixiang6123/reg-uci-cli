# uci-reg-cli
A command line tool for querying course information from UCI

## Screenshot

[![asciicast](https://asciinema.org/a/LeTrH16cvp6Yq4NlSZY9fOcZP.svg)](https://asciinema.org/a/LeTrH16cvp6Yq4NlSZY9fOcZP)

## Install

```bash
$ brew install node

$ npm i -g reg-uci-cli
```

## How to use

Find course EECS 10.

```bash
$ reg-uci-cli -d eecs -c 10
```

Find all courses of Networked System department.

```bash
$ reg-uci-cli -d "net sys"
```

## Options

* `-d` Department 
* `-c` Course number
* `-t` Year term
