// Primary Key                                      	Foreign Key
// Unique hota hai                                 	Duplicate allowed
// NULL nahi hota	                                NULL ho sakta hai
// Table ko identify karta hai	                  Tables ko connect karta hai



// Primary Key Syntax
// 1. While creating table:
// CREATE TABLE student (
//     roll_no INT PRIMARY KEY,
//     name VARCHAR(50),
//     age INT
// );
// 2. Separate way (after column):
// CREATE TABLE student (
//     roll_no INT,
//     name VARCHAR(50),
//     age INT,
//     PRIMARY KEY (roll_no)
// );
// 🔗 Foreign Key Syntax
// 1. While creating table:
// CREATE TABLE student (
//     roll_no INT PRIMARY KEY,
//     name VARCHAR(50),
//     age INT,
//     course_id INT,
//     FOREIGN KEY (course_id) REFERENCES course(course_id)
// );
// 2. Separate constraint style:
// CREATE TABLE student (
//     roll_no INT,
//     name VARCHAR(50),
//     age INT,
//     course_id INT,
//     PRIMARY KEY (roll_no),
//     FOREIGN KEY (course_id) REFERENCES course(course_id)
// );
// ➕ Add Foreign Key later (ALTER):
// ALTER TABLE student
// ADD FOREIGN KEY (course_id) REFERENCES course(course_id);
// ➕ Add Primary Key later:
// ALTER TABLE student
// ADD PRIMARY KEY (roll_no);
// Hinglish quick recap:
// PRIMARY KEY → unique + main ID
// FOREIGN KEY → dusre table se connection
// REFERENCES → kis table ko link karna hai