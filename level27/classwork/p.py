

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


def make_negative( number ):
    return -abs(number)



    
def positive_sum(arr):
    random = 0
    for i in arr:
        if i >= 0:
            random +=i
    return random


    