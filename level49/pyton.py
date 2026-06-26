# numbers =[1,2,3,4,5]

# random = list(map(lambda x: x * 2,numbers))
# print(random)


# names = ["gaga" , "giorgi" , "nino" , "andria"]


# uppercase = list(map(.upper, names))

# print(uppercase)



# numbers =[1,2,3,4,5,6,7,8,9,10]

# filter = list(filter(lambda x: x % 2 == 0 , numbers))
# print(filter)

# def nums(*numbers):
#     return sum(numbers)


# print(nums(13121,212121,8492553,1010109881002537825637))


# def  names(**name1):
#     for key,value in name1.items():
#         print(f"{key}: {value}")

# names(name='gaga' , lastname='tsiklauri' , age=12)


#map -ფუნქციით ვახდენთ მოქმედებებს სიის ყველა წევრზე და filter-ი ფილტრავს როგორც დავუწერთ
#map-ი გვიბრუნებს იგივე სიგრძის სიიას და filter-ი კი ხშირად აბრუნებს უფრო მოკლე სიას 



# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# odds = list(filter(lambda x: x % 2 == 1, numbers))
# print(odds)



# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# squars = list(map(lambda x: x ** 2 , numbers))
# print(squars)


# names = ['გაგა' ,'ილია' , 'გიო' , 'ანდრია' , 'ნინო' , 'ალექსანდრე']
# filtered = list(filter(lambda x: x[0] == 'ა',names))
# print(filtered)

# def food_ranking(category , *foods):
#     counter= 1
#     for food in foods:
#         print(f"{category} : {counter}. {food}")
#         counter += 1

# food_ranking('food' , 'khinkali' , 'mtsvadi' ,'chaqafuli')
# food_ranking('desert' ,'namcxvari' ,'orcxobila' , 'shokoladi')


# def car_builder(**parts):
#     for key,value in parts.items():
#         print(f"{key} : {value}")

# car_builder(brand = 'bmw' , model ='m4 competition' , color = 'green' , )

