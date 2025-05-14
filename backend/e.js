const bcrypt = require('bcryptjs');

const enteredPassword = 'deepthi1234';
const storedHash = '$2b$10$IoOis5q8ZSoXF0CNGFYrHeZgQwwhwYH4bY9dLIonlmS05dyedQtzC';

bcrypt.compare(enteredPassword, storedHash, (err, isMatch) => {
    if (err) throw err;
    console.log('Manual comparison result:', isMatch); // true or false
});
