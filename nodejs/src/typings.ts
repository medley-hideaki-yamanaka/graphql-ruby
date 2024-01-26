import { Models } from './models';
import DataLoader from 'dataloader';
import author from './models/author';
import post from './models/post';

export interface ResolverContext {
  models: Models;
  loaders: {
    author: DataLoader<number, author>;
    post: DataLoader<number, post>;
  }
}
