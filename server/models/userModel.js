import db from '../config/db.js';

    const getUserByEmail = (email, callback) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], callback);
    };

    const createUser = (user, callback) => {
      db.run('INSERT INTO users (username, email, password, subscription, credits) VALUES (?, ?, ?, ?, ?)', 
        [user.username, user.email, user.password, user.subscription, user.credits], callback);
    };

    export { getUserByEmail, createUser };
