#!/usr/bin/env python3
'''
function make_multiplier that takes a float multiplier as argument
and returns a function that multiplies a float by multiplier
'''
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    '''multiply x to a float'''
    return lambda x: x * multiplier