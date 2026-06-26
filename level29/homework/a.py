def dont_give_me_five(start,end):
    return sum('5' not in str(n) for n in range(start, end + 1))
    return n   



def is_sorted_and_how(arr):

    if sorted(arr) == arr:
        return 'yes, ascending'
    elif sorted(arr)[::-1] == arr:
        return "yes, descending"
    else:
        return "no"


def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char in vowels:
            count += 1
    return count


duplicate_encode = lambda w: ''.join('(' if w.lower().count(c) == 1 else ')' for c in w.lower())
