import { query } from "../lib/db";
export default async function handler(req, res) {

    try {
        const querySql = 'SELECT marki_ID, nazwa_marka, lata_marka, img_marka, OK from marki WHERE OK=1';
        const values = [];
        const data = await query(querySql, values);

        res.status(200).json({marki: data})

    } catch (error) {
        res.status(500).json({error: error})
    }
}