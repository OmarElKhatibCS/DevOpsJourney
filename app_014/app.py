print("Hello lets save a number to a file")

f = open('file.txt','w')
nb = 12
f.write(str(nb)+"\n")
f.close()
