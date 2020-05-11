#!/usr/bin/env python3
import sys
import operator

if len(sys.argv) < 2:
    raise Exception("Give me a filename!")

specials = {
    '\n': '''\\n''',
}

filepath = sys.argv[1]

bytes_seen = {}

with open(filepath, 'rb') as fh:
    for byte in fh.read():
        if byte not in bytes_seen:
            bytes_seen[byte] = 0
        bytes_seen[byte] += 1

bytes_seen = sorted(bytes_seen.items(), key=operator.itemgetter(1))

for key, value in bytes_seen:

    char = chr(key)
    if char in specials:
        char = specials[char]

    print("{:3d} aka [{:^5s}] occurs {:5d} times".format(key, char, value))
