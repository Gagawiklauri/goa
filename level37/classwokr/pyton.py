def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    return sum([i for i in range(n, m) if i % n == 0])


    def area_or_perimeter(l , w):
    return [l * w if l == w else 2 * (l + w)][0]

    def array(string):
    return ' '.join([x for x in string.split(',')][1:-1]) if string and len(string.split(',')) > 2 else None

    