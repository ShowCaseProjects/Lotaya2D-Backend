import { Global, Module } from "@nestjs/common";
import { WalletService } from "src/wallet/wallet.service";

@Global()
@Module({
    controllers:[],
    providers:[WalletService],
    exports:[WalletService]
})
export class LotayaWalletlibModule{}