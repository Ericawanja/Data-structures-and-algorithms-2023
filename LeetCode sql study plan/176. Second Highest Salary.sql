--My sql (sql server doesnt have limit)
SELECT
    ifNull((SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1), Null) AS SecondHighestSalary
;

--mssql 
SELECT MAX(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee)