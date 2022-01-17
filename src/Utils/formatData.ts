export const formatData: (str: string) => void = (str) => {
  if (!str) return str;

  const strSplited = str.split(" ")[0].split("-");

  return `${strSplited[2]}/${strSplited[1]}/${strSplited[0]}`;
};

export const formatWithoutYear: (str: string) => void = (str) => {
  if (!str) return str;

  const strSplited = str.split(" ")[0].split("-");

  return `${strSplited[2]}/${strSplited[1]}`;
};

export const formatOnlyYear: (str: string) => void = (str) => {
  if (!str) return str;

  const strSplited = str.split(" ")[0].split("-");

  return `${strSplited[0]}`;
};
