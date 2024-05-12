import csv

filename = './words.txt'

with open(filename, 'r') as file:
    reader = csv.reader(file, delimiter=',')
    for row in reader:
        if len(row) != 5:
            print("Invalid row:", row)