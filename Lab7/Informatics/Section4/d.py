n = int(input())
num = 1

while n >= num:
    if n == num:
        print("YES")
        break
    num *= 2 
else: print("NO")