import Image from 'next/image';

const logoStyle = {
  width: '199px',
  height: 'auto',
}

export default function Logo() {
  return (
    <Image
      src='/logo.svg'
      width='199'
      height='40'
      style={logoStyle}
      alt='Seapedia site logo'
    />
  );
}