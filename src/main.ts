import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { ValidatePipe } from 'lib/valiadtepipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug']
  });
  const configService = new ConfigService();
  const loyataBackendApiPrefix = configService.get<string>(
    'LOTAYA_BACKEND_API_PREFIX'
  );
  app.setGlobalPrefix(loyataBackendApiPrefix);
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin,X-Requested-Width,Content-Type,Accept,'
  });

  app.useGlobalPipes(new ValidatePipe());

  const sessionSecret = configService.get<string>('SESSION-SECRET');

  // const prisma: any = new PrismaClient();
  // app.use(cookieParser());

  // app.use(
  //   expressSession({
  //     cookie: {
  //       maxAge: 30 * 60 * 1000,
  //       secure: true,
  //       httpOnly: true,
  //     },
  //     name: 'lotaya-lid',
  //     proxy: true,
  //     serect: sessionSecret,
  //     resave: false,
  //     saveUninitialized: true,
  //     rolling: false,
  //     store: new PrismaSessionStore(prisma, {
  //       checkPeriod: 2 * 60 * 1000,
  //       dbRecordIdIsSessionId: true,
  //       dbRecordIdFunction: undefined,
  //     }),
  //   })
  // );
  // app.use(express.json({ limit: '15mb' }));
  // app.use(express.urlencoded({ limit: '15mb' }));
  
  const config = new DocumentBuilder()
    .setTitle('Lotaya')
    .setDescription('Lotaya API common')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.getHttpAdapter().getInstance().set('etag', false);
  const port = 8080;
  await app.listen(port).then(() => {
    Logger.overrideLogger(['error', 'warn', 'log', 'debug']);
  });
  Logger.debug(`Application common listen port ${port} `)
}
bootstrap();
