export const stripUnit = (v: string) => {
  const value = parseFloat(v);
  const unit = v.substring(("" + value).length).trim();
  return { value, unit };
};
