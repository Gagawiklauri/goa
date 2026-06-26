def disemvowel(string):
    vowels = "aeiouAEIOU"
    result = ""

    for i in string:
        if i not in vowels:
            result += i

    return result


    def reverse_seq(n):
    return list(range (n, 0, -1))

    def smash(words):
    return " ".join(words) 


    def invert(lst):
    return [-x for x in lst]


    def dont_give_me_five(start,end):
    return sum('5' not in str(n) for n in range(start, end + 1))
    return n 
    

    