#reference ETEC224-Lab2

print("Hello World")
print('This is how you output in python')

#declaring variables, no type specification needed
myi = 77
myf = 12.3
myc = 'k'

#outputting variables
print(myi, myf, myc)

#using str.format()
print('{0} {1} cost ${2}'.format(6, 'bananas', 1.74))

print("myi={0:d}, myf={1:1.2f}, myc={2}".format(myi, myf, myc))
print("myi={0:d}, myf={1:1.1f}, myc={2}".format(myi, myf, myc))
print("myi={0:d}, myf={1:5.1f}, myc={2}".format(myi, myf, myc))

"""
{0:d} indicates that the first argument of the format() functions should be substituted here
with the formatting of an integer.
{1:1.2f} indicates that the second argument of the format() functions should be substituted
here with the formatting of a floating point number with two decimal digits.
%f indicates that a floating point number should be substituted
%s indicates that a string (character sequence) should be substituted. It follows the
format %{integer spaces}.{fractional spaces}f
"""

#strings
mys = 'ETEC224 System Integration'
print('mys = {0}'.format(mys))

"""
If you have a really long format string that you don't want to split up, it would be nice if you
could reference the variables to be formatted by name instead of by position. This can be
done by simply passing the dict and using square brackets '[]' to access the keys
"""
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; Dcab: {0[Dcab]:}'.format(table))

#selection

if ( myi == 77 ):
  print ("myi is the number 77")

if ( myi == 77 ):
  print ("myi is the number 77")
  print ("still inside the if block")

"""
In the case of running Python in interactive mode, an if statement needs to be terminated by an empty line
The Python prompt changes from the primary >>> prompt to the secondary ... when inside a code block

Boolean operators (and, or) may be used to refine conditional statements.
"""

if ( myi > 50 ) and ( myf > 0 ):
  print ("both conditions satisfied!")

if ( myi == 50 ) or ( myf > 0 ):
  print ("at least one condition satisfied!")

if ( myi == 50 ) and ( myf > 0 ):
  print ("both conditions satisfied!")

if ( myf < 0 ):
  print ("myf is negative!")
elif ( myf > 100 ):
  print ("myf is larger than 100!")
else:
  print ("myf is between 0 and 100!")


#loops

num = 1
while num <= 5:
  print ("%i" % (num))
  num += 1

for num in [1, 2, 3, 4, 5]:
  print ("%i" % (num))

"""
In the case of the while loop, the integer variable is incremented each time through the loop.
In the case of the for loop, a list of values is substituted each time through the loop.
"""

for num in range(1, 101):
  print ("%i" % (num))

"""
The range function requires a starting value and an ending value.
The starting value is included but the ending value is not.
The range function creates a sequence of integer values that increase by 1 by default. If you
would like to alter the nature of the increment, this can be included as a third argument. Try the
following code to print numbers starting at 101 decreasing by 3 each time:
"""

for num in range(101, 1, -3):
  print ("%i" % (num))

for x in range (0, 3):
  print( "x = " + str(x) )
  for y in range (0, 4):
    print("   y = " + str(y) )

for x in mys:
  print( "x = " + x )

"""
A list can also consist of items of different types and can be saved using a single variable name.
"""

mylist=[ 'hello', 4.5, 'another', 3, 90, 'peter', 'sam']

for x in mylist:
  print( 'x = ' + str(x) )

"""
The break statement and continue statement can be used to disrupt normal flow of a loop. The
break statement can be used to exit a loop, whereas the continue statement can be used to
skip the current iteration of a loop.
"""

print ("%s" % (mys))
for x in mys:
  if ( x == 'e' ):
    break
  print( 'x = ' + x )

print ('%s' % (mys))
for x in mys:
  if ( x == 'e' ):
    continue
  print( 'x = ' + x )

#infinite loop

while True:
  x = input('Enter a number (0 to exit): ')
  if ( int(x) == 0 ):
    break

"""
The raw_input() function can be used to prompt the user to enter text data and save it to a variable.
The int() function can be used to convert text data to integer data 

Python has many libraries (modules) that can be used in your code. In order to use these
modules, you must import them. In the following example, we will import the call function. The
call function enables your program to run commands intended for the Linux OS (not the Python
interpreter).
"""
from subprocess import call
call( ['ping', 'www.centennialcollege.ca'])

"""
note: the output produced is the output as if you had run the command at the Bash command prompt.
Bash is an implementation of the shell concept and is often used during Python software
development as part of a programmer's development environment.

#To interpreter mode of Python, use the exit command.
#exit()
"""