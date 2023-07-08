const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const allBrands = await prisma.marki.findMany(
        {
            where: {
                OK: '1',
            },
            select: {
                marki_ID: true,
                nazwa_marka: true,
                lata_marka: true,
                img_marka: true,
            },
            orderBy: {
                nazwa_marka: "asc"
            }
        }
    )
    console.log(allBrands);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })