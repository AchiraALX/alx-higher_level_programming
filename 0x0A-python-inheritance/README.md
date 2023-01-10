#  This is alx 0x0A-python-inheritance README file

## 0x0A. Python - Inheritance

### 0. Lookup

A function that returns the list of available attributes and methods of an object:

- Prototype: `def lookup(obj):`
- Returns a list object
- You are not allowed to import any module

### 1. My list

A class `MyList` that inherits from `list`:

- Public instance method: `def print_sorted(self):` that prints the list, but sorted (ascending sort)
- You can assume that all the elements of the list will be of type `int`
- You are not allowed to import any module

### 2. Exact same object

A function that returns `True` if the object is exactly an instance of the specified class ; otherwise `False`.

- Prototype: `def is_same_class(obj, a_class):`
- You are not allowed to import any module

### 3. Same class or inherit from

A function that returns `True` if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise `False`.

- Prototype: `def is_kind_of_class(obj, a_class):`
- You are not allowed to import any module

### 4. Only sub class of

A function that returns `True` if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise `False`.

- Prototype: `def inherits_from(obj, a_class):`
- You are not allowed to import any module

### 5. Geometry module

An empty class `BaseGeometry`.

- You are not allowed to import any module

### 6. Improve Geometry

A class `BaseGeometry` (based on `5-base_geometry.py`).

- Public instance method: `def area(self):` that raises an `Exception` with the message `area() is not implemented`
- You are not allowed to import any module

### 7. Integer validator

A class `BaseGeometry` (based on `6-base_geometry.py`).

- Public instance method: `def area(self)`: that raises an Exception with the message `area() is not implemented`
- Public instance method: `def integer_validator(self, name, value)`: that validates `value`
  - You can assume `name` is always a string
  - If `value` is not an integer: raise a `TypeError` exception, with the message `<name> must be an integer`
  - If `value` is less or equal to 0: raise a `ValueError` exception with the message `<name> must be greater than 0`
- You are not allowed to import any module

### 8. Rectangle

A class `Rectangle` that inherits from `BaseGeometry` (7-base_geometry.py).

- Instantiation with `width` and `height`: `def __init__(self, width, height):`
  - `width` and `height` must be private. No getter or setter
  - `width` and `height` must be positive integers, validated by `integer_validator`

### 9. Full rectangle

A class `Rectangle` that inherits from `BaseGeometry` (7-base_geometry.py). (task based on `8-rectangle.py`)

- Instantiation with `width` and `height`: `def __init__(self, width, height):`
  - `width` and `height` must be private. No getter or setter
  - `width` and `height` must be positive integers, validated by `integer_validator`
- the area() method must be implemented
- `print()` should print, and `str()` should return, the following rectangle description: `[Rectangle] <width>/<height>`

### 10. Square #1

A class `Square` that inherits from `Rectangle` (9-rectangle.py):

- Instantiation with `size`: `def __init__(self, size):`
  - `size` must be private. No getter or setter
  - `size` must be a positive integer, validated by `integer_validator`
- the area() method must be implemented

### 11. Square #2

A class `Square` that inherits from `Rectangle` (9-rectangle.py). (task based on `10-square.py`)

- Instantiation with `size`: `def __init__(self, size):`
  - `size` must be private. No getter or setter
  - `size` must be a positive integer, validated by `integer_validator`
- the area() method must be implemented
- `print()` should print, and `str()` should return, the square description: `[Square] <width>/<height>`

### 12. My integer

A class `MyInt` that inherits from `int`:
[1-my_list.py](..%2F..%2FArchive%2Fholbertonschool-higher_level_programming%2F0x0A-python-inheritance%2F1-my_list.py)
- `MyInt` is a rebel. `MyInt` has `==` and `!=` operators inverted
- You are not allowed to import any module

### 13. Can I?

A function that adds a new attribute to an object if it’s possible:

- Rise a `TypeError` exception, with the message `can't add new attribute` if the object can’t have new attribute.
- You are not allowed to use `try/except`
- You are not allowed to import any module
