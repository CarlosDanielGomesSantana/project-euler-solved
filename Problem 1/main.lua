--[[
    Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
]]--

local multiples_of_3_and_5 = {}
local sum_of_multiples = 0

for n = 1, 999 do
    if n%3 == 0 or n%5 == 0 then
        table.insert(multiples_of_3_and_5, n)
    end
end

for _, value in ipairs(multiples_of_3_and_5) do
    sum_of_multiples = sum_of_multiples + value
end

print(sum_of_multiples)