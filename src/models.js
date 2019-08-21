import {uuid} from './scripts/util';

export const flexContainerModel = styles => ({
  id: uuid(),
  styles,
  flexItems: []
});

export const flexItemModel = styles => ({
  id: uuid(),
  styles
});