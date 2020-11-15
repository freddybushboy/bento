import get from "lodash.get";
import { Components, Tokens } from "../theme";

const parseComponentProperties = (obj: any, parse: Function): any => {
  for (var k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
      parseComponentProperties(obj[k], parse);
    } else if (obj.hasOwnProperty(k)) {
      obj[k] = parse(obj[k]);
    }
  }
};

export const createTheme = <T = Tokens, C = Components, A = {}>(
  tokens: T,
  components: Components,
  additional?: A
): T & { components: C } & A => {
  parseComponentProperties(components, (path: string) => {
    return get(tokens, path, path);
  });

  return ({
    ...tokens,
    components,
    additional,
  } as unknown) as T & { components: C } & A;
};
