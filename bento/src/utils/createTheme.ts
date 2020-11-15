import get from "lodash.get";
import { Components, Tokens } from "../theme";

const parseTokens = (obj: any, parse: Function): any => {
  for (var k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
      parseTokens(obj[k], parse);
    } else if (obj.hasOwnProperty(k)) {
      obj[k] = parse(obj[k]);
    }
  }
};

// TODO better type support.
export const createTheme = <T = Tokens, C = Components, A = {}>(
  tokens: T,
  components: Components,
  additional?: Record<string, unknown>
): T & { components: C } & A => {
  parseTokens(components, (path: string) => {
    return get(tokens, path, path);
  });
  additional &&
    parseTokens(additional, (path: string) => {
      return get(tokens, path, path);
    });

  return ({
    ...tokens,
    components,
    ...additional,
  } as unknown) as T & { components: C } & A;
};
