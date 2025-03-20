def xor(x, y):
    if x == 1 and y == 1:
        print(0)
        return False
    else: 
        print(1)
        return True

n = int(input())
m = int(input())
xor(n, m)