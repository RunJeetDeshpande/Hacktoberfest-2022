def add(num1,num2):
    result=num1+num2
    print(num1, "+", num2, "=",result)
    print("result =",result )
    
def sub(num1,num2):
    result=num1-num2
    print(num1, "-", num2, "=",result)
    print("result =",result )

def mult(num1,num2):
    result=num1*num2
    print(num1, "*", num2, "=",result)
    print("result =",result )
    
def div(num1,num2):
    result=num1/num2
    print(num1, "/", num2, "=",result)
    print("result =",result )
    
    
choice=input("choose any one operator +,-,*,/  :")
firstnum = int(input("Enter the first number:"))
secondnum = int(input("Enter the second number:"))

if choice== '+':
    add(firstnum,secondnum)
    
if choice== '-':
    sub(firstnum,secondnum)
    
if choice== '*':
    mult(firstnum,secondnum)
    
if choice== '/':
    div(firstnum,secondnum)
    
