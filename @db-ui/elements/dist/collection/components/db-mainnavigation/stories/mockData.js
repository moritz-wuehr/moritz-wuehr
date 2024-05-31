export const mockData = () => {
  const data = [
    { label: 'Startseite', link: '#', current: true },
    { label: 'Aufträge', link: '#' }
  ];
  return JSON.stringify(data);
};
export const mockDataSub = () => {
  const data = [
    {
      label: 'Startseite',
      link: '#',
      current: true,
      children: [
        {
          label: 'Sub1',
          link: '#',
          children: [
            { label: 'Sub1Sub1', link: '#' },
            { label: 'Sub1Sub2', link: '#' }
          ]
        }
      ]
    },
    { label: 'Aufträge', link: '#' }
  ];
  return JSON.stringify(data);
};
//# sourceMappingURL=mockData.js.map
