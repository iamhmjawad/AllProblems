/*Show first name, last name, and gender of patients who's gender is 'M'*/
SELECT first_name, last_name, gender from patients where gender='M'

-- Show first name and last name of patients who does not have allergies. (null)
SELECT first_name, last_name from patients where allergies is null

-- Show first name of patients that start with the letter 'C'
SELECT first_name from patients where first_name like 'C%'

-- Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)
SELECT first_name, last_name from patients where weight between 100 and 120

-- Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'
update patients set allergies = 'NKA' where allergies is null

-- Show first name and last name concatinated into one column to show their full name.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM patients;
select first_name || ' ' || last_name as full_name from patients

-- Show first name, last name, and the full province name of each patient. Example: 'Ontario' instead of 'ON'
SELECT first_name, last_name, province_name FROM patients JOIN province_names ON 
province_names.province_id = patients.province_id;

SELECT first_name, last_name, 
       (SELECT province_name FROM province_names WHERE province_id = patients.province_id) as province_name
FROM patients;

-- Show how many patients have a birth_date with 2010 as the birth year.
SELECT COUNT(*) AS total_patients FROM patients WHERE YEAR(birth_date) = 2010;

-- Show the first_name, last_name, and height of the patient with the greatest height.
select first_name, last_name, max(height) from patients

-- Show all columns for patients who have one of the following patient_ids: 1,45,534,879,1000
select * from patients where patient_id in(1,45,534,879,1000)

-- Show the total number of admissions
SELECT COUNT(*) AS total_admissions FROM admissions;

-- Show all the columns from admissions where the patient was admitted and discharged on the same DATE.
select * from admissions where day(admission_date) = day(discharge_date)

-- Show all the columns from admissions where the patient was admitted and discharged on the same DAY.
select * from admissions where admission_date = discharge_date

-- Based on the cities that our patients live in, show unique cities that are in province_id 'NS'?
select Distinct(city) as unique_cities from patients where province_id = 'NS' 

-- Write a query to find list of patients first_name, last_name, and allergies from Hamilton where allergies are not null
select first_name, last_name, allergies from patients where city = 'Hamilton' and allergies is not null







-- Show unique birth years from patients and order them by ascending.
select distinct(year(birth_date)) as unique_years from patients order by unique_years asc
SELECT DISTINCT YEAR(birth_date) AS birth_year FROM patients ORDER BY birth_year;

-- Show unique first names from the patients table which only occurs once in the list. For example, if two or more people are named 'John' in the first_name column then don't include their name in the output list. If only 1 person is named 'Leo' then include them in the output.

select distinct first_name from patients group by first_name having count(first_name)  = 1

-- Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
select patient_id, first_name from patients where first_name like 's%s' and len(first_name) >= 6

-- Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'. Primary diagnosis is stored in the admissions table.
SELECT p.patient_id, p.first_name, p.last_name 
    FROM patients as p
    JOIN admissions AS a 
    ON p.patient_id = a.patient_id
WHERE a.diagnosis = 'Dementia'

SELECT patient_id, first_name, last_name FROM patients WHERE patient_id IN (SELECT patient_id FROM admissions WHERE diagnosis = 'Dementia');

-- Show first_name, last_name, and the total number of admissions attended for each doctor. Every admission has been attended by a doctor.

SELECT d.first_name, d.last_name, COUNT(*) AS total_admissions
FROM doctors d
JOIN admissions a ON d.doctor_id = a.attending_doctor_id
GROUP BY a.attending_doctor_id

SELECT d.first_name, d.last_name,
  (SELECT COUNT(*) FROM admissions a WHERE a.attending_doctor_id = d.doctor_id) AS total_admissions
FROM doctors d;

-- Display every patient's first_name. Order the list by the length of each name and then by alphbetically
select first_name from patients order by len(first_name),first_name


-- Show the total amount of male patients and the total amount of female patients in the patients table.Display the two results in the same row.
select
	(select count(*) from patients where gender = 'M') as male_count,
    (select count(*) from patients where gender = 'F') as female_count

-- Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.
select first_name, last_name, allergies from patients 
    where allergies = 'Penicillin' or allergies = 'Morphine'
    order by allergies, first_name, last_name

SELECT first_name, last_name, allergie FROM patients
    WHERE allergies IN ('Penicillin', 'Morphine')
    ORDER BY allergies, first_name, last_name;

-- Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.

-- The first query groups the rows by both patient_id and diagnosis, and then filters out any groups where the count of diagnosis values within that group is less than or equal to 1. This means that the query will only return rows where the same diagnosis appears for a given patient_id value more than once.
select patient_id, diagnosis from admissions 
group by patient_id,diagnosis having count(diagnosis) > 1
-- The second query only groups the rows by diagnosis, and then filters out any groups where the count of diagnosis values within that group is less than or equal to 1. This means that the query will return all rows where the same diagnosis appears more than once in the admissions table, regardless of which patient_id value it is associated with.
select patient_id, diagnosis from admissions 
group by diagnosis having count(diagnosis) > 1
-- In other words, the first query focuses on identifying cases where a single patient has been diagnosed with the same condition multiple times, while the second query focuses on identifying cases where the same condition has been diagnosed in multiple patients, regardless of how many times each patient has been diagnosed with that condition.



-- Show the city and the total number of patients in the city. Order from most to least patients and then by city name ascending.
select city, count(*) as num_patients from patients group by city
	order by num_patients desc, city


-- Show first name, last name and role of every person that is either patient or doctor. The roles are either "Patient" or "Doctor"
SELECT first_name, last_name, 'Patient' as role FROM patients
    union all
select first_name, last_name, 'Doctor' from doctors;


-- Show all allergies ordered by popularity. Remove NULL values from query.
SELECT allergies, COUNT (*) as Total FROM patients
	WHERE allergies IS NOT NULL
	GROUP BY allergies
ORDER BY Total DESC

-- Show all patient's first_name, last_name, and birth_date who were born in the 1970s decade. Sort the list starting from the earliest birth_date.
select first_name, last_name, birth_date from patients where year(birth_date) between 1970 and 1979 order by birth_date asc

--We want to display each patient's full name in a single column. Their last_name in all upper letters must appear first, then first_name in all lower case letters. Separate the last_name and first_name with a comma. Order the list by the first_name in decending order EX: SMITH,jane
select concat(upper(last_name),',',lower(first_name)) as full_name from patients order by first_name desc


--Show the province_id(s), sum of height; where the total sum of its patient's height is greater than or equal to 7,000.
SELECT province_id, SUM(height) AS total_height FROM patients GROUP BY province_id HAVING total_height >= 7000;


--Show the difference between the largest weight and smallest weight for patients with the last name 'Maroni'
SELECT MAX(weight) - MIN(weight) AS weight_difference FROM patients wHERE last_name = 'Maroni';


--Show all of the days of the month (1-31) and how many admission_dates occurred on that day. Sort by the day with most admissions to least admissions.
SELECT DAY(admission_date) AS day_of_month, COUNT(*) AS num_admissions FROM admissions GROUP BY day_of_month ORDER BY num_admissions DESC;

--Show all columns for patient_id 542's most recent admission_date.
SELECT * FROM admissions WHERE patient_id = 542 ORDER BY admission_date DESC LIMIT 1;

--Show patient_id, attending_doctor_id, and diagnosis for admissions that match one of the two criteria:
--1. patient_id is an odd number and attending_doctor_id is either 1, 5, or 19.
--2. attending_doctor_id contains a 2 and the length of patient_id is 3 characters.
SELECT patient_id, attending_doctor_id, diagnosis FROM admissions WHERE
  ( attending_doctor_id IN (1, 5, 19) AND patient_id % 2 != 0 ) OR 
  ( attending_doctor_id LIKE '%2%' AND len(patient_id) = 3)
  

--For each doctor, display their id, full name, and the first and last admission date they attended.
SELECT doctors.doctor_id, CONCAT(doctors.first_name, ' ', doctors.last_name) AS full_name,
  MIN(admissions.admission_date) AS first_admission, MAX(admissions.admission_date) AS last_admission
FROM doctors
JOIN admissions ON doctors.doctor_id = admissions.attending_doctor_id
GROUP BY doctors.doctor_id

