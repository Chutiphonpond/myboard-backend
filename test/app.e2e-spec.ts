import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
describe('App e2c', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('User', () => {
    describe('Get me', () => {
      it.todo('should return user data');
    });

    describe('Edit user', () => {});
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it('should Signup', () => {
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')
          .withJson({
            email: 'test@mail.com',
            password: 'password123',
          });
      });
    });

    describe('Signin', () => {
      it.todo('should Signin');
    });
  });

  describe('Post', () => {
    describe('Create post', () => {});

    describe('Edit post', () => {});

    describe('Delete post', () => {});

    describe('Get all posts', () => {});

    describe('Get post by id', () => {});
  });

  it.todo('testtesttest');
});
