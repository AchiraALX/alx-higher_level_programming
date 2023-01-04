# This is the 0x09-python-everything_is_object project README.md

## 0. Who am I

A function would you use to print the type of an object.
Write the name of the function in the file, without ().
```
$ cat 0-answer.txt
type

## 1. Where are you

How do you get the variable identifier (which is the memory address in the CPython implementation)?

Write the name of the function in the file, without ().

## 2. Right count

In the following code, do a and b point to the same object? Answer with Yes or No.

```
>>> a = 89
> >> b = 100
```

## 3. Right count =

In the following code, do a and b point to the same object? Answer with Yes or No.

```
>>> a = 89
> >> b = 89
```

## 4. Right count =

In the following code, do a and b point to the same object? Answer with Yes or No.

```
>>> a = 89
> >> b = a
```

## 5. Right count =

In the following code, do a and b point to the same object? Answer with Yes or No.

```
>>> a = 89
> >> b = a + 1
```

## 6. Is equal

What do these 3 lines print?

```
>>> s1 = "Best School"
> >> s2 = s1
> >> print(s1 == s2)
```

## 7. Is the same

What do these 3 lines print?

```
>>> s1 = "Best School"
> >> s2 = s1
> >> print(s1 is s2)
```

## 8. Is really equal

What do these 3 lines print?

```
>>> s1 = "Best School"
> >> s2 = "Best School"
> >> print(s1 == s2)
```

## 9. Is really the same

What do these 3 lines print?

```
>>> s1 = "Best School"
> >> s2 = "Best School"
> >> print(s1 is s2)
```

## 10. And with a list, is it equal

What do these 3 lines print?

```
>>> l1 = [1, 2, 3]
> >> l2 = [1, 2, 3]
> >> print(l1 == l2)
```

## 11. And with a list, is it the same

What do these 3 lines print?

```
>>> l1 = [1, 2, 3]
> >> l2 = [1, 2, 3]
> >> print(l1 is l2)
```

## 12. And with a list, is it equal

What do these 3 lines print?

```
>>> l1 = [1, 2, 3]
> >> l2 = l1
> >> print(l1 == l2)
```

## 13. And with a list, is it the same

What do these 3 lines print?

```
>>> l1 = [1, 2, 3]
> >> l2 = l1
> >> print(l1 is l2)
```

## 14. List append

What does this script print?

```
>>> l1 = [1, 2, 3]
> >> l2 = l1
> >> l1.append(4)
> >> print(l2)
```

## 15. List add

What does this script print?

```
>>> l1 = [1, 2, 3]
> >> l2 = l1
> >> l1 = l1 + [4]
> >> print(l2)
```

## 16. Integer incrementation

What does this script print?

```
>>> def increment(n):
> >> n += 1
> >>
> >> a = 1
> >> increment(a)
> >> print(a)
```

## 17. List incrementation

What does this script print?

	def increment(n):
		n.append(4)
	
	l = [1, 2, 3]
	increment(l)
	print(l)

## 18. List assignation

What does this script print?

```
>>> def assign_value(n, v):
> >> n = v
> >>
> >> l1 = [1, 2, 3]
> >> l2 = [4, 5, 6]
> >> assign_value(l1, l2)
> >> print(l1)
```

## 19. Copy a list object

Write a function def copy_list(l): that returns a copy of a list.

## 20. Tuple or not?

Write a function def is_same_class(obj, a_class): that returns True if the object is exactly an instance of the specified class ; otherwise False.

## 21. Tuple or not?

Write a function def is_kind_of_class(obj, a_class): that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False.

## 22. Only sub class of

Write a function def inherits_from(obj, a_class): that returns True if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise False.

## 23. Same class or inherit from

Write a function def is_kind_of_class(obj, a_class): that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False.

## 24. Object is instance

Write a function def is_same_class(obj, a_class): that returns True if the object is exactly an instance of the specified class ; otherwise False.

## 25. Object is instance

Write a function def is_same_class(obj, a_class): that returns True if the object is exactly an instance of the specified class ; otherwise False.

## 26. Object with filter

Write a function def multiply_by_2(my_dict): that returns a new dictionary with all values multiplied by 2

## 27. Locked class

Write a function def multiply_by_2(my_dict): that returns a new dictionary with all values multiplied by 2

## 28. Locked class

Write a function def multiply_by_2(my_dict): that returns a new dictionary with all values multiplied by 2

## 29. Maximum recursion depth

Write a function def pascal_triangle(n): that returns a list of lists of integers representing the Pascal’s triangle of n:

## 30. Palindrome

Write a function def is_palindrome(word): that returns True if the word is a palindrome, otherwise return False.

## 31. Search and replace

Write a function def search_replace(my_list, search, replace): that replaces all occurrences of an element by another in a new list.

## 32. Unique addition

Write a function def uniq_add(my_list=[]): that adds all unique integers in a list (only once for each integer).

## 33. Present in both

Write a function def common_elements(set_1, set_2): that returns a set of common elements in two sets.

## 34. Only differents

Write a function def only_diff_elements(set_1, set_2): that returns a set of all elements present in only one set.

## 35. Number of keys

Write a function def number_keys(a_dictionary): that returns the number of keys in a dictionary.



