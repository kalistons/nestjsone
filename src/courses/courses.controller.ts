import { Controller, Get, Version } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Version('1')
    @Get()
    findAllV1(): string {
        return 'This action returns all cats for version 1';
    }

    @Version('2')
    @Get()
    findAllV2(): string {
        return 'This action returns all cats for version 2';
    }
}
