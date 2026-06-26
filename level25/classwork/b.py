def number(num1=3, num2=5):
    if num1 > num2:
        print(num1)
    else:
        print(num2)

    def sum_array(a):
    return sum(a)





def plural(n):
     return n != 1

def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char in vowels:
            count += 1
    return count



def square_digits(num):
    result = ""
    for d in str(num):
        result += str(int(d) ** 2)
    return int(result)