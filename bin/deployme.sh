#!/usr/bin/env bash

if [[ $DEPLOY_URI ]]; then
  curl --request POST \
       --url $DEPLOY_URI \
       --form 'run_deploy_token='$RUN_DEPLOY_TOKEN
else
  echo "No DEPLOY_URI found" 1>&2
  exit 2
fi
