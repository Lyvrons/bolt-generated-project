PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      subscription TEXT NOT NULL,
      credits INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      reviews TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    INSERT INTO users (username, email, password, subscription, credits) VALUES
    ('john_doe', 'john@example.com', 'password123', 'monthly', 100),
    ('jane_smith', 'jane@example.com', 'password123', 'annual', 500);

    INSERT INTO leads (user_id, name, address, phone, email, reviews) VALUES
    (1, 'Restaurant Le Bistrot', '123 Rue de la Gastronomie, Paris', '01 23 45 67 89', 'contact@lebistrot.com', 'Excellent service et cuisine'),
    (2, 'Agence Immobilière', '456 Avenue des Immobilier, Lyon', '04 56 78 90 12', 'info@agenceimmobiliere.com', 'Très professionnel et réactif');
