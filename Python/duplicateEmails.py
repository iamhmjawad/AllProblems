def numUniqueEmails(emails):
    unique = set()

    for email in emails:
        local, domain = email.split('@')
        # print(local, domain)
        # local.split('+')[0]: This part of the code splits the local string by the + character and returns the first element of 
        # the resulting list. In the example email address above, this would return "john.doe", which is the username plus any dots.
        local = local.split('+')[0].replace('.', '')
        print(local)
        unique.add(local + '@' + domain)
    
    return len(unique)

print(numUniqueEmails(['hue@gmail.com', 'h.ue@gmail.com', 'ha+y@gmail.com', 'ha@gmail.com']))

# Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

# For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
# If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

# For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
# If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

# For example, "m.y+name@email.com" will be forwarded to "my@email.com".