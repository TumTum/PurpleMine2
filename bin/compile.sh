#!/bin/bash -e

docker run -it --rm -v $(pwd):/data digitallyseamless/nodejs-bower-grunt:latest grunt default
