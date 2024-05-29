import Image from "next/image";
import { Carousel, TableDevices } from "./components";

import image1 from '../../../public/images/image_1.jpeg'
import image2 from '../../../public/images/image_2.jpeg'
import image3 from '../../../public/images/image_3.jpeg'

import game1 from '../../../public/images/games_3.jpeg'
import game2 from '../../../public/images/games_2.jpeg'

import CTR from '../../../public/games/CTR.png'
import FIFA from '../../../public/games/FIFA.png'
import Fortnite from '../../../public/games/Fortnite.png'
import GT7 from '../../../public/games/GT7.png'
import GTA from '../../../public/games/GTA.png'
import HL from '../../../public/games/HL.png'
import ITT from '../../../public/games/ITT.png'
import mk from '../../../public/games/mk.png'
import nba from '../../../public/games/nba.png'
import ufc from '../../../public/games/ufc.png'
import { Button } from "@mui/material";
import { Instagram, Phone } from "@mui/icons-material";


const games = [
  {
    name: 'FIFA 24',
    icon: FIFA
  },
  {
    name: 'NBA 2K23',
    icon: nba
  },
  {
    name: 'UFC 4',
    icon: ufc
  },
  {
    name: 'Mortal Kombat X',
    icon: mk
  },
  {
    name: 'Gran Turismo 7',
    icon: GT7
  },
  {
    name: 'Crash Team Racing',
    icon: CTR
  },
  // {
  //   name: 'IT TAKES TWO',
  //   icon: ITT
  // },
  {
    name: 'GTA V',
    icon: GTA
  },
  {
    name: 'Fortnite',
    icon: Fortnite
  },
  {
    name: 'Hogwarts Legacy',
    icon: HL
  },
]

export default function HomePage() {
  return (
    <div className="bg-black text-white w-full h-full overflow-scroll">
      <div className="h-[72px] flex justify-center items-center p-4">
        <Image src="/logo.svg" alt="Logo" width={60} height={50} />
      </div>
      <div className="h-[360px] w-full overflow-hidden">
        <Carousel images={[image1, image3, image1]} />
      </div>
      <div className="mt-[64px] mb-[16px]">
        <h1 className="text-2xl text-center">We are located</h1>
      </div>
      <div className="h-[360px] w-full overflow-hidden">
        <Image src={image2} alt="Logo" className="w-full" />
      </div>
      <div className="w-full pt-[16px] flex justify-center flex-col items-center">
        <p>37/A Josipa Broza Tita, Podgorica 81000</p>
        <div className="py-[64px] mt-[20px] flex justify-center flex-col items-center">
          <h2>Opening hours</h2>
          <p>mon - sun</p>
          <p>9:00 AM - 12:00 PM</p>
        </div>
      </div>
      <div className="h-[460px] w-full overflow-hidden">
        <Carousel images={[game1, game2, game1]} />
      </div>
      <div className="w-full mt-[20px] p-[30px]">
        <TableDevices />
      </div>
      <div className="w-full mt-[20px] pt-[16px] flex justify-center flex-col items-center">
        <h2 className="text-2xl">Consoles - Playstation 5</h2>
        <div className="py-[4px] grid grid-cols-3">
          {games.map((game, index) => (
            <div key={index} className="flex justify-center flex-col items-center pb-4">
              <p className="mt-8 mb-2">{game.name}</p>
              <Image src={game.icon} alt={game.name} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[20px] p-[34px] flex justify-center flex-col items-center">
        <h2 className="text-2xl">Reserve your computer</h2>
        <Button variant="contained" style={{ backgroundColor: '#860FCF'}} color="primary" className="p-4 mt-[20px]">Make a reservation</Button>
      </div>
      <div className="w-full mt-[20px] p-[34px] flex justify-center flex-col items-center">
        <h2 className="text-2xl">Contact Us</h2>
        <div className="flex p-[20px] justify-center items-center gap-4">
          <Button variant="contained" style={{ backgroundColor: '#860FCF', width: '160px' }} color="primary" className="p-4 mt-[20px]">
            <div className="flex flex-col justify-center items-center">
              <Phone />
              <a href="phone:069-123-456">+ 382 67 997999</a>
            </div>
          </Button>
          <Button variant="contained" style={{ backgroundColor: '#860FCF', width: '160px'}} color="primary" className="p-4 mt-[20px]">
            <div className="flex flex-col justify-center items-center">
              <Instagram />
              <a href="https://instagram/@gamepointme">@gamepointme</a>
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full mt-[20px] p-[34px] flex justify-center flex-col items-center">
        <p className="w-[180px] flex justify-center items-center">© Copyright 2024. Sva prava zadržana | GAME POINT</p>
      </div>
    </div>
  );
}


