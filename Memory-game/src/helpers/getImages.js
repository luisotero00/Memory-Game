export const getImages = (size) => {
  const images = [
    "../../public/adidas_logo_icon_247720.svg",
    "../../public/amazon_logo_icon_247652.svg",
    "../../public/apple_logo_icon_247580.svg",
    "../../public/asus_logo_icon_247542.svg",
    "../../public/atari_logo_icon_247540.svg",
    "../../public/binance_logo_icon_247472.svg",
    "../../public/bmw_logo_icon_247450.svg",
    "../../public/chevrolet_logo_icon_247368.svg",
    "../../public/css_logo_icon_247248.svg",
    "../../public/lamborghini_logo_icon_247876.svg"
  ];

  const newImages = images.slice(0, size);

  return newImages.flatMap(item => [item, item]).sort(() => Math.random() - 0.5)
};
