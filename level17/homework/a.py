# list არის მონაცემთა ტიპი, სადაც შეგვიძლია ბევრი ელემენტის შენახვა

# 1) append() — ამატებს ელემენტს სიის ბოლოში
fruits = ["apple", "banana"]
fruits.append("orange")

# 2) pop() — შლის ბოლო ელემენტს (ან ინდექსით მითითებულს)
fruits.pop()

# 3) remove() — შლის კონკრეტულ ელემენტს
fruits.remove("apple")

# 4) len() — აბრუნებს სიის სიგრძეს
print(len(fruits))

# 5) reverse() — შებრუნებს სიას
fruits.reverse()


numbers = [1, 2, 3, 4, 5]

numbers.reverse()

print(numbers)



items = ["a", "b", "c", "d"]

items.pop()

items.append("z")

print(items)



nums = [10, 20, 30]

if len(nums) > 4:
    nums.append(100)
elif len(nums) < 4:
    nums.pop()

print(nums)



fruits = ["apple", "banana", "orange"]

user_fruit = input("შეიყვანე ხილი: ")

if user_fruit in fruits:
    fruits.remove(user_fruit)
else:
    fruits.append(user_fruit)

print(fruits)

