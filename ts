#!/usr/bin/env bash
cd ZEZO
rm -rf Tshake.lua
screen -S ZEZO -X kill
screen -S ZEZO ./TsAu
