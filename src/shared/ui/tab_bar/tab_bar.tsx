'use client'

import { useCallback, useMemo, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Games, House, SportsEsports } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

const links = [
  { name: '', href: '/home', icon: House },
  {
    name: '',
    href: '/reservation',
    icon: Games,
  },
  { name: '', href: '/playstation', icon: SportsEsports },
  { name: '', href: '/account', icon: PersonPinIcon },
];

export const IconLabelTabs = () => {
  const pathname = usePathname();
  const [currentPathName, setCurrentPathName] = useState<string>(pathname);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setCurrentPathName(links[newValue].href)
  }, [setCurrentPathName]);

  const tabIndex = useMemo(() => links.findIndex((link) => link.href === currentPathName), [currentPathName]);

  return (
    <Tabs value={tabIndex} onChange={handleChange} variant='fullWidth' aria-label="icon label tabs example" className='w-full'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Tab href={link.href} key={link.name} icon={<LinkIcon />} label={link.name} />
        );
      })}
    </Tabs>
  );
}
