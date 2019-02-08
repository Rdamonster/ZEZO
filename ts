#!/usr/bin/env bash
cd riida
screen -S devmonster -X kill
screen -S @riida ./TsAu
