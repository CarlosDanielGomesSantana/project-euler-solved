--[[
    Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
]]--

local sum_of_multiples = 0

for n = 1, 999 do
    sum_of_multiples = (
        (n%3 == 0 or n%5 == 0) and n or 0
    ) + sum_of_multiples
end

print(sum_of_multiples)
