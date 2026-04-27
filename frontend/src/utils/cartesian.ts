// utils/cartesian.ts
export const generateVariants = (options: { name: string; choices: { name: string; value: string }[] }[]) => {
  if (options.length === 0) return [];

  return options.reduce((acc, option) => {
    const nextAcc: any[] = [];
    option.choices.forEach((choice) => {
      if (acc.length === 0) {
        nextAcc.push({ name: choice.name, combinations: [{ option: option.name, value: choice.name }] });
      } else {
        acc.forEach((prev) => {
          nextAcc.push({
            name: `${prev.name} / ${choice.name}`,
            combinations: [...prev.combinations, { option: option.name, value: choice.name }],
          });
        });
      }
    });
    return nextAcc;
  }, [] as any[]);
};