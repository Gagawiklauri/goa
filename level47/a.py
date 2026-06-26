def find_it(seq):
    result = 0
    for num in seq:
        result ^= num
    return result




    duplicate_encode = lambda w: ''.join('(' if w.lower().count(c) == 1 else ')' for c in w.lower())




    def dont_give_me_five(start,end):
    return sum('5' not in str(n) for n in range(start, end + 1))
    return n


    def reverse_seq(n):
    return list(range (n, 0, -1))


    def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char in vowels:
            count += 1
    return count



    def filter_list(l):
    'return a new list with the strings filtered out'
    return [x for x in l if isinstance(x, int)]


    def square_sum(numbers):
    #your code here
    return sum(x * x for x in numbers)