#!/usr/bin/python3
from random import randint

import numpy


def sqrt(n):
    x = 1  # initial guess
    h1, h2 = 0.0, 0.0  # history
    while True:
        if x * x == n or x == h1 or x == h2:
            return x
        h2 = h1
        h1 = x
        x = x - ((x * x - n) / (2 * x))  # magic


if __name__ == "__main__":

    error_count = 0
    repeat = 300
    for _ in range(repeat):
        number = randint(0, 10000000000000)
        result = sqrt(number)
        math_result = numpy.sqrt(number)
        error = abs(result - math_result)
        if error:
            error_count += 1
        print(number, result, math_result, error)

    print()
    print(f"Errors: {error_count}")
    print(f"Percentage: {error_count/repeat:%}")
