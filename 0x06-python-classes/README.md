
# This is the alx 0x06-python-classes README.md

# This is the alx 0x06-python-classes README.md

## 0. My first square

An empty class `Square` that defines a square:

-   You are not allowed to import any module

## 1. Square with size

A class `Square` that defines a square by: (based on `0-square.py`)

-   Private instance attribute: `size`
-  Instantiation with optional `size`: `def __init__(self, size=0):`
-  You are not allowed to import any module

## 2. Size validation

A class `Square` that defines a square by: (based on `1-square.py`)
-   Private instance attribute: `size`
-  Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- You are not allowed to import any module

## 3. Area of a square

A class `Square` that defines a square by: (based on `2-square.py`)
-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- You are not allowed to import any module

## 4. Access and update private attribute

A class `Square` that defines a square by: (based on `3-square.py`)
-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- Public instance method: `def my_print(self):` that prints in stdout the square with the character `#`
- if `size` is equal to `0`, print an empty line
- You are not allowed to import any module

## 5. Printing a square

A class `Square` that defines a square by: (based on `4-square.py`)

-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- Public instance method: `def my_print(self):` that prints in stdout the square with the character `#`
- if `size` is equal to `0`, print an empty line
- `my_print` should print to `stdout`, and not `stderr`
- You are not allowed to import any module

## 6. Coordinates of a square

A class `Square` that defines a square by: (based on `5-square.py`)
-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- Public instance method: `def my_print(self):` that prints in stdout the square with the character `#`
- if `size` is equal to `0`, print an empty line
- `my_print` should print to `stdout`, and not `stderr`
- Public instance attribute: `position`
- Instantiation with optional `position`: `def __init__(self, size=0, position=(0, 0)):`
- `position` must be a tuple of 2 positive integers, otherwise raise a `TypeError` exception with the message `position must be a tuple of 2 positive integers`
- You are not allowed to import any module

## 7. Singly linked list

A class `Node` that defines a node of a singly linked list by: (based on `6-square.py`)
-   Private instance attribute: `data`
- Instantiation with `data` and `next_node` (defaults to `None`): `def __init__(self, data, next_node=None):`
- `data` must be an integer, otherwise raise a `TypeError` exception with the message `data must be an integer`
- `next_node` can be another node object or `None`, otherwise raise a `TypeError` exception with the message `next_node must be a Node object`
- Public instance attribute: `data`
- Public instance attribute: `next_node`
- Public instance method: `def __str__(self):` to print the `data` of the node
- You are not allowed to import any module

A class `SinglyLinkedList` that defines a singly linked list by: (based on `100-singly_linked_list.py`)
-   Private instance attribute: `head`
- Instantiation with `head` (defaults to `None`): `def __init__(self, head=None):`

## 8. Print Square instance

A class `Square` that defines a square by: (based on `6-square.py`)
-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- Public instance method: `def my_print(self):` that prints in stdout the square with the character `#`
- if `size` is equal to `0`, print an empty line
  - 
- `my_print` should print to `stdout`, and not `stderr`
- `print()` and `str()` should print the square with the character `#`
- You are not allowed to import any module

## 9. Compare 2 squares

A class `Square` that defines a square by: (based on `8-square.py`)
-   Private instance attribute: `size`
- Instantiation with optional `size`: `def __init__(self, size=0):`
- `size` must be an integer, otherwise raise a `TypeError` exception with the message `size must be an integer`
- if `size` is less than `0`, raise a `ValueError` exception with the message `size must be >= 0`
- Public instance method: `def area(self):` that returns the current square area
- Public instance method: `def my_print(self):` that prints in stdout the square with the character `#`
- if `size` is equal to `0`, print an empty line
- `my_print` should print to `stdout`, and not `stderr`
- `print()` and `str()` should print the square with the character `#`
- Public instance method: `def __eq__(self, other):` that returns `True` if the area of the square is equal to `other` square area

## 10. ByteCode -> Python #5

Write the Python class `MagicClass` that does exactly the same as the following Python bytecode:

```
  1           0 LOAD_CONST               1 (0)
	      3 LOAD_FAST                0 (self)
	      6 STORE_ATTR               0 (x)

  2           9 LOAD_CONST               1 (0)
	     12 LOAD_FAST                0 (self)
	     15 STORE_ATTR               1 (y)

  3          18 LOAD_GLOBAL              2 (type)
	     21 LOAD_FAST                1 (radius)
	     24 CALL_FUNCTION            1
	     27 LOAD_GLOBAL              3 (int)
	     30 COMPARE_OP               9 (is not)
	     33 POP_JUMP_IF_FALSE       48

  4          36 LOAD_GLOBAL              4 (TypeError)
	     39 LOAD_CONST               2 ('radius must be a number')
	     42 CALL_FUNCTION            1
	     45 RAISE_VARARGS            1

  5     >>   48 LOAD_FAST                0 (self)
	     51 LOAD_FAST                1 (radius)
	     54 STORE_ATTR               1 (y)

  6          57 LOAD_FAST                0 (self)
	     60 LOAD_FAST                1 (radius)
	     63 STORE_ATTR               0 (x)

  7          66 LOAD_GLOBAL              5 (complex)
	     69 LOAD_CONST               3 (0)
	     72 LOAD_FAST                1 (radius)
	     75 CALL_FUNCTION            2
	     78 STORE_FAST               2 (c)

  8          81 LOAD_FAST                0 (self)
	     84 LOAD_FAST                2 (c)
	     87 STORE_ATTR               2 (__import__)

  9          90 LOAD_CONST               0 (None)
	     93 RETURN_VALUE

```
