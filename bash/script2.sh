#!/bin/bash

echo "the command you executed was: $0"
echo "the first positional parameter was: $1"
echo "the second positional parameter was: $2"
echo "the third positional parameter was: $3"
echo "the fourth positional parameter was: $4"
echo "the total number of positional parameters was $#"
echo "the process id of this script is $$"

myparameters=$*
echo "content of myparameters: $myparameters"

for i in $@ 
do 
  echo $i
done

