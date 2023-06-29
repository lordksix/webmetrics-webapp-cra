// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { handlersAir, handlersLocation } from './handlers';

export const serverAir = setupServer(handlersAir);
export const serverLocation = setupServer(handlersLocation);
