#!/usr/bin/env bash
cd riida
screen -S @riida -X kill
screen -S @riida ./TsAu
