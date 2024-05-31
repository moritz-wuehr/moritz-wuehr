export const mockData = () => {
  const links = [
    { label: 'Einstellungen', href: '#' },
    { label: 'Nachrichten', href: '#' }
  ];
  return JSON.stringify(links);
};
export const mockDataWebsites = () => {
  const links = [
    {
      label: 'www.bahn.de',
      href: 'https://www.bahn.de/',
      target: '_blank'
    },
    {
      label: 'www.dbsystel.de',
      href: 'https://www.dbsystel.de/',
      target: '_blank'
    }
  ];
  return JSON.stringify(links);
};
export const mockDataIcon = () => {
  const links = [
    {
      label: 'Einstellungen',
      href: '#',
      icon: 'settings',
      ariaCurrent: 'page'
    },
    { label: 'Nachrichten', href: '#', icon: 'chat' }
  ];
  return JSON.stringify(links);
};
export const mockDataLanguages = () => {
  const links = [
    {
      label: 'EN',
      href: '#',
      title: 'English language'
    },
    {
      label: 'DE',
      href: '#',
      title: 'Deutsche Sprache'
    }
  ];
  return JSON.stringify(links);
};
//# sourceMappingURL=mockData.js.map
