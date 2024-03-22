import { Component } from '@angular/core';

interface carouselContent1type {
  image: string;
  title: string;
  floor: string;
  eth1: string;
  volume: string;
  eth2: string;

}
interface carouselContent2type {
  image: string;
  title: string;
}
interface carouselContent3type {
  image: string;
  title: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  carouselContent1: carouselContent1type[] = [
    { image: "/assets/images/Rectangle 19.png", title: "Edit By Cam", floor: "Floor", eth1: "0.12 ETH", volume: "24h Volume", eth2: "432 ETh" },
    { image: "/assets/images/Rectangle 20.png", title: "Edit By Cam", floor: "Floor", eth1: "324 ETH", volume: "24h Volume", eth2: "1.03 ETH" },
    { image: "/assets/images/Rectangle 21.png", title: "Edit By Cam", floor: "Floor", eth1: "3.23 ETH", volume: "24h Volume", eth2: "4,190 ETH" },
  ];

  carouselContent2: carouselContent2type[] = [
    { image: "/assets/images/Rectangle 19 (1).png", title: "This is an NFT" },
    { image: "/assets/images/Rectangle 20 (1).png", title: "The way to buy an NFT" },
    { image: "/assets/images/Rectangle 21 (1).png", title: "Create an NFT" }
  ];

  carouselContent3:carouselContent3type[] = [
    { image: "/assets/images/Rectangle 25.png", title: "Art" },
    { image: "/assets/images/Rectangle 26.png", title: "Gaming" },
    { image: "/assets/images/Rectangle 27.png", title: "Photography" }
  ];
}
