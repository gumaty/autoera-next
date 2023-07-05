import mysql from "mysql2/promise";
export async function query(query, values = []) {

    const dbConfig = {
        host: process.env.NEXT_PUBLIC_HOSTING,
        user: process.env.NEXT_PUBLIC_USER,
        password: process.env.NEXT_PUBLIC_PASSWORD,
        database: process.env.NEXT_PUBLIC_DB
    };

    const connection = await mysql.createConnection(dbConfig);

    try {
        const [results] = await connection.execute(query, values);
        await connection.end();
        return results;

    } catch (error) {
        throw Error(error.message);
        return {error};
    }
}