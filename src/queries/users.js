import pool from './setup.js';

exports.getUsers = async () => {
  const query = `
    SELECT * FROM users;
  `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};