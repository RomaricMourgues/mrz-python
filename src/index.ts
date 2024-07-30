import { formats } from './formats';
import states from './generated/states';
import parse from './parse/parse';
export { formats, states, parse };
export * from './types';

type WindowType = {
  formats: typeof formats;
  states: typeof states;
  parse: typeof parse;
};

(window as unknown as WindowType).formats = formats;
(window as unknown as WindowType).states = states;
(window as unknown as WindowType).parse = parse;
