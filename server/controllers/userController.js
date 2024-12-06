import { getUserByEmail, createUser } from '../models/userModel.js';

    export const registerUser = (req, res) => {
      const { username, email, password, subscription, credits } = req.body;

      getUserByEmail(email, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Server error' });
        }

        if (user) {
          return res.status(400).json({ message: 'User already exists' });
        }

        createUser({ username, email, password, subscription, credits }, (err) => {
          if (err) {
            return res.status(500).json({ message: 'Server error' });
          }

          res.status(201).json({ message: 'User registered successfully' });
        });
      });
    };

    export const loginUser = (req, res) => {
      const { email, password } = req.body;

      getUserByEmail(email, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Server error' });
        }

        if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (user.password !== password) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
      });
    };
