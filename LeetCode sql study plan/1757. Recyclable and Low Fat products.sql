-- product_id is the primary key for this table.low_fats is an ENUM of type ('Y', 'N')
-- where
--     'Y' means this product is low fat
--     and 'N' means it is not.recyclable is an ENUM of types ('Y', 'N')
-- where
--     'Y' means this product is recyclable
--     and 'N' means it is not

-- QUESTION

-- Write an SQL query to find the ids of 
-- products that are both low fat
-- and recyclable.Return the result table in any order.

select product_id from Products 
where low_fats ='Y' AND recyclable= 'Y'