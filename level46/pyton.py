def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"










def duplicate_count(text):
    text = text.lower()
    count = 0
    
    for i in set(text):
        if text.count(i) > 1:
            count += 1
            
    return count
     



     def is_valid_IP(strng):
    parts = strng.split(".")
    
    if len(parts) != 4:
        return False
    
    for i in parts:
        if not i.isdigit():
            return False
        
        if (i[0] == '0' and len(i) > 1):
            return False
        
        if not (0 <= int(i) <= 255):
            return False
    
    return True

















    def second_upper(text):
    result = ""

    for i, char in enumerate(text):
        if i % 2 == 1:
            result += char.upper()
        else:
            result += char

    return result







    def multiply_by_index(numbers):
    return [num * x for x, num in enumerate(numbers)]





    def neighbors(lst):
    result = []

    for i in range(1, len(lst) - 1):
        if lst[i] > lst[i - 1] and lst[i] > lst[i + 1]:
            result.append(lst[i])

    return result







    def words_lengths(text):
    words = text.split()
    return {word: len(word) for word in words}










    def multiples(n):
    result = []

    for i in range(1, n + 1):
        if i % 3 == 0:
            result.append("Three")
        else:
            result.append(i)

    return result