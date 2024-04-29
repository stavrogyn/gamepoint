'use client'

import Link from 'next/link';

const links = [
  { name: 'Pro PC Rooom', href: '/reservation/pro-pc' },
  {
    name: 'Basic PC Room',
    href: '/reservation/basic-pc',
  },
  { name: 'PlayStations', href: '/playstation' },
];

export default function RoomSelector() {
  return (
    <div className="flex flex-col items-center color-black-400">
      <h1>Reservation Page</h1>
      {links.map((link) => {
        return (
          <Link className="mt-5 text-black" href={link.href} key={link.name}>{link.name}</Link>
        );
      })}
    </div>
  );
}
