import pool from './setup.js';

exports.getUserByGoogleId = async (id) => {
  const query = `
    SELECT * FROM users WHERE google_id = $1;
  `;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.createUserByGoogle = async ({ id, name, email }) => {

  const query = `
    INSERT INTO users (google_id, name, email) VALUES ($1, $2, $3) RETURNING *;
  `;
  const values = [id, name, email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};