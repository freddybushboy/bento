export const unitsToNumber = (units: string) => {
  return {
    value: parseFloat(units),
    unit: units.includes("px")
      ? "px"
      : units.includes("rem")
      ? "rem"
      : units.includes("em")
      ? "em"
      : "",
  };
};
