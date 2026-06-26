def filter_list(l):
    'return a new list with the strings filtered out'
    return [x for x in l if isinstance(x, int)]


def square_sum(numbers):
    return sum(x * x for x in numbers)



def lovefunc( flower1, flower2 ):
    if (flower1 %2==0 and flower2 %2 !=0)or(flower1 %2!=0 and flower2 %2==0):
        return True
    else:
        return False


def disemvowel(string):
    vowels = "aeiouAEIOU"
    result = ""

    for i in string:
        if i not in vowels:
            result += i

    return result