const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(32) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

const createTableOTPs = `
CREATE TABLE IF NOT EXISTS otps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    otp VARCHAR(10) NOT NULL,
    expiry_time DATETIME NOT NULL
);

`

const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, NOW())
`;

const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;

const updateUserByEmail = `
UPDATE users
SET password = ?
WHERE email = ?;
`

module.exports = {
    createTableUSers,
    createTableOTPs,
    createNewUser,
    findUserByEmail,
    updateUserByEmail
};