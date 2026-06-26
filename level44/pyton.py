num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

result = num1 / num2
print("შედეგი არის:", result)



except ZeroDivisionError:
print("შეცდომა: ნულზე გაყოფა არ შეიძლება!")

except ValueError:
print("გთხოვთ შეიყვანოთ მხოლოდ რიცხვები!")



try:
    num = float(input("შეიყვანეთ რიცხვი: "))
    print("თქვენ შეიყვანეთ რიცხვი:", num)
except ValueError:
    print("შეცდომა! გთხოვთ შეიყვანოთ მხოლოდ რიცხვი და არა ტექსტი.")

try:
    index = int(input("შეიყვანეთ ინდექსი: "))
    print("სიაში არსებული ელემენტია:", my_list[index])
except IndexError:
    print("შეცდომა! ასეთი ინდექსი სიაში არ არსებობს.")
except ValueError:
    print("გთხოვთ შეიყვანოთ მხოლოდ რიცხვი.")




try:
    num = float(input("შეიყვანეთ რიცხვი: "))
    square = num ** 2
    print("რიცხვის კვადრატია:", square)
except ValueError:
    print("შეცდომა! გთხოვთ შეიყვანოთ მხოლოდ რიცხვი.")

    
try:
    num = float(input("შეიყვანეთ რიცხვი: "))
    square = num ** 2
    print("რიცხვის კვადრატია:", square)
except ValueError:
    print("შეცდომა! გთხოვთ შეიყვანოთ მხოლოდ რიცხვი.")














# try და except გამოიყენება error-ისთვის 
#finally რაც არ უნდა იყოს ბოლოს მაინც გამოიტანს რასც დავუწერთ
try:
    num = int(input("enter a number: "))
except:
    print("enter a number")












try:
    user = input("enter your name")
except:
    print("enter name")
    

