#!/usr/bin/env python3
'''
function’s parameters and return values with the appropriate types
'''
import typing


def element_length(
        lst: typing.Iterable[typing.Sequence]
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    '''return the value type appropriate'''
    return [(i, len(i)) for i in lst]
