import { AdminRoleId, AdminRoleName, RoleId, RoleName, TransationTypeId, TransationTypeName } from '../staticlib/index';
import { Prisma, PrismaClient } from './lotaya_wallet';


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

const adminRoleData: Prisma.AdminRolesCreateInput[] = [
    {
        role_id: AdminRoleId.LevelOne,
        name: AdminRoleName.LevelOne
    },
    {
        role_id: AdminRoleId.LevelTwo,
        name: AdminRoleName.LevelTwo
    }
];

const transationTypeData: Prisma.TransactionTypeCreateInput[] = [
    {
        transaction_type_id:TransationTypeId.Deposit,
        transaction_type:TransationTypeName.Deposit
    },
    {
        transaction_type_id:TransationTypeId.Withdrawal,
        transaction_type:TransationTypeName.Withdrawal
    },
    {
        transaction_type_id:TransationTypeId.Loss,
        transaction_type:TransationTypeName.Loss
    },
    {
        transaction_type_id:TransationTypeId.Win,
        transaction_type:TransationTypeName.Win
    },
    {
        transaction_type_id:TransationTypeId.Bet,
        transaction_type:TransationTypeName.Bet
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

export const adminRegisterMasterData = async () => {
    try {
        await Promise.all(
            adminRoleData.map(
                async (insertData) => await prisma.adminRoles.create({ data: insertData })
            )
        );
    }
    catch (error) {
        console.log('Skip seeding lotaya DB')
    }
}

export const transationTypeRegisterMasterData = async () => {
    try {
        await Promise.all(
            transationTypeData.map(
                async (insertData) => await prisma.transactionType.create({ data: insertData })
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
    await adminRegisterMasterData();
    await transationTypeRegisterMasterData();
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