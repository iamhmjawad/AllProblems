def validP(arr):
    stack = []
    closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for c in arr:
        if c in closeToOpen:
            # stack[-1] is the top most element in the stack
            if stack and stack[-1] == closeToOpen[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)

    return True if not stack else False


print(validP('({[]}'))
