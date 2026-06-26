def is_divisible(n,x,y):
    return n % x == 0 and n % y ==0


def better_than_average(class_points, your_points):
        average = sum(class_points) / len(class_points)
        return your_points > average


    function spinWords(string){
return string.split(" ").map(word => word.length >= 5
                   word.split("").reverse().join("")
                  : word).join(" ")
}


def find_it(seq):
    result = 0
    for num in seq:
        result ^= num
    return result


    