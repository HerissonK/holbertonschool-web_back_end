#!/usr/bin/env python3
'''
function sum_mixed_list which takes a list mxd_lst
of integers and floats and returns their sum as a float
'''
from typing import Union


def sum_mixed_list(mxd_lst: list[Union[float, int]]) -> float:
    '''add a list of mixed float and int'''
    return float(sum(mxd_lst))
