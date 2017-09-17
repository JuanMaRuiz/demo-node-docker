#!/bin/sh

while ! nc -z db 27017 2/dev/null
do
	echo "waiting for the db..."
	sleep 1
done

npm start
