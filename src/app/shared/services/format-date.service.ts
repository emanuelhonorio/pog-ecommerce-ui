import { Injectable } from '@angular/core';

import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

@Injectable({
  providedIn: 'root',
})
export class FormatDateService {
  constructor() {}

  formatDateFromNow(date: Date) {
    return dayjs(date).fromNow();
  }
}
