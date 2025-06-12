#!/bin/bash
source .env_app_local

mkdir -p postgresql-data-timescale/

cd ../../

docker build -f ci-cd/Dockerfile.timescale-db-with-apache-age -t timescale-db-with-apache-age:local .