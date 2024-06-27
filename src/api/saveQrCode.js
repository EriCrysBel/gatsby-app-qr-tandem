// src/api/saveQrCode.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { data, nombre_ref, description, created_by } = req.body;

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'gatsby_qr'
        });

        try {
            const [result] = await connection.execute(
                'INSERT INTO qr_codes (data, nombre_ref, description, created_by) VALUES (?, ?, ?, ?)',
                [data, nombre_ref, description, created_by]
            );

            res.status(200).json({ message: 'QR code saved successfully', id: result.insertId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        } finally {
            await connection.end();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
