<<<<<<< HEAD
#!/usr/bin/python3
def weight_average(my_list=[]):
    if len(my_list) is 0:
        return 0
    a = list(map(list, zip(*my_list)))
    b = [x * y for x, y in zip(a[0], a[1])]
    return sum(b) / sum(a[1])
=======
#!/usr/bin/python3
def weight_average(my_list=[]):
    if len(my_list) is 0:
        return 0
    a = list(map(list, zip(*my_list)))
    b = [x * y for x, y in zip(a[0], a[1])]
    return sum(b) / sum(a[1])
>>>>>>> 68a698087cfd3bcaee2fca233add249c88087e08
