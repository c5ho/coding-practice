#!/bin/bash

echo "the command you executed was: $0"
echo "the first positional parameter was: $1"
echo "the second positional parameter was: $2"

#the following is a series of if statements to check if a condition is met 

if [ $1 -gt $2 ] 
  then 
    echo "$1 is numerically greater than $2"
fi

if [ $1 -ge $2 ]
  then
  echo "$1 is numerically greater than or equal to $2"
fi

if [ $1 -eq $2 ]
  then
    echo "$1 is numerically equal to $2"
fi

if [ $1 -lt $2 ] 
  then
    echo "$1 is numerically less than $2"
fi

if [ $1 -le $2 ] 
  then
    echo "$1 is numerically less than or equal to $2"
fi

if [ $1 -ne $2 ] 
  then
    echo "$1 is numerically not equal to $2"
fi

if [ $1 == $2 ] 
  then
    echo "$1 is string-wise equal to $2"
fi

if [ $1 != $2 ] 
  then
    echo "$1 is string-wise not equal to $2"
fi

if [ $1 \< $2 ] 
  then
    echo "$1 is string-wise less than $2"
fi

if [ $1 \> $2 ]
  then
    echo "$1 is string-wise greater than $2"
fi

if [ -n $1 ]
  then
    echo "The length of $1 is not zero"
fi
