
import { RoleId, RoleName } from '../staticlib/index';
import { PrismaClient, Prisma } from '/src/generated/lotaya_wallet';

const prisma = new PrismaClient();

const roleData: Prisma.RolesCreateInput[] = [
    {
        role_id: RoleId.ADMIN,
        name: RoleName.ADMIN
    },
    {
        role_id: RoleId.USER,
        name: RoleName.USER
    }
];

export const registerMasterData = async () => {
    try {
        await Promise.all(
            roleData.map(
                async (insertData) => await prisma.roles.create({ data: insertData })
            )
        );
    }
    catch (error) {
        console.log('Skip seeding lotaya DB')
    }
}

const main = async () => {
    console.log('Start seeding...');
    await registerMasterData();
    console.log('Seeding finished...');
}

if(require.main===module)
{
    main()
    .catch((e)=>
    {
     console.log(e);
     process.exit(1);
    })
    .finally(async ()=> {
        await prisma.$disconnect();
    })
}