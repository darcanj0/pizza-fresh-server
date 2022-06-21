import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }

  create(createTableDto: CreateTableDto) {
    return 'Criar nova mesa' + JSON.stringify(createTableDto);
  }
}
