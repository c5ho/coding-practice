#!/bin/bash

if [ ! -e "$1" ] 
  then
    echo "the file does not exist!" 
    exit 1
elif [ ! -r "$1" ] 
  then
    echo "you do not have read permission on this file!" 
    exit 2
fi

count=0

while read line 
do
  for word in $line 
  do
      if [ word = "to" ] 
        then
          ((count++))
      fi
  done
done < $1

echo "the word 'to' occurred $count times in your file"