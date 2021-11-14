import { Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class TestService {
  //private readonly test: Test[] = [{ title: 'JavaScriptを勉強する', done: true }, {id: 'b', name: 'Bob'}, {id: 'c', name: 'Cathy'}];
  private readonly test: Test[] = [{ title: 'JavaScriptを勉強する', done: true }];
  listTest(): Test[] {
    return this.test;
  }

  getTest(id: string): Test {
    return this.test.find(value => value.title === id);
  }
}

