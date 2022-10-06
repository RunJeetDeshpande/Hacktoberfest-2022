n = input("Enter the number of word  : ")
a = n.split(" ")

def wordlist(a):
    leni =len(a[0])
    temp = a[0]
    for i in a:
        if len(i) > leni:
            temp = i
            leni = len(i)
    return (temp,leni)
print("Longest word with its length is: ",wordlist(a))
