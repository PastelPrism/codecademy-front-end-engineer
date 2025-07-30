#!/bin/bash

# Print working directory
pwd

# List contents
ls

# Go to freight/
cd freight

# List contents
ls

# Go to porteur/
cd porteur

# Go back to bicycle-world-ii/ and list contents
cd ../..
ls

# Go to mountain/downhill/
cd mountain/downhill

# Create file dirt.txt
touch dirt.txt

# Create mud.txt in the same directory
touch mud.txt

# List contents
ls

# Make safety/ directory
mkdir safety

# Go back to bicycle-world-ii/
cd ../../..

# List contents again
ls

# Create bmx/ directory
mkdir bmx

# Create tricks.txt inside bmx/ without cd'ing
touch bmx/tricks.txt

# List contents one more time
ls
