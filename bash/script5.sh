#!/bin/bash

echo "FILE SEARCH RAN AT: $(date)" >> /home/labber/coding-practice/bash/dirlog 
for item in $1/*
do
  if [ -f $item ] 
    then  
      echo "file found in $1: $item"
  fi
done >> /home/labber/coding-practice/bash/dirlog