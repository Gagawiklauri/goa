name = "Giorgi"

for letter in name:
    print(letter)


age = 25

for digit in str(age):
    print(digit)

correct_password = "12345"

user_password = input("შეიყვანეთ პაროლი: ")

while user_password != correct_password:
    print("არასწორი პაროლი, სცადეთ თავიდან.")
    user_password = input("შეიყვანეთ პაროლი: ")

print("პაროლი სწორია!")

