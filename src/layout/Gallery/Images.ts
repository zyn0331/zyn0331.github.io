import image01 from '@/assets/images/01.jpg';
import image02 from '@/assets/images/02.jpg';
import image03 from '@/assets/images/03.jpg';
import image04 from '@/assets/images/04.jpg';
import image05 from '@/assets/images/05.jpg';
import image06 from '@/assets/images/06.jpg';
import image07 from '@/assets/images/07.jpg';
import image08 from '@/assets/images/08.jpg';
import image09 from '@/assets/images/09.jpg';
import image10 from '@/assets/images/10.jpg';
import image11 from '@/assets/images/11.jpg';
import image12 from '@/assets/images/12.jpg';
import image13 from '@/assets/images/13.jpg';
import image14 from '@/assets/images/14.jpg';
import image15 from '@/assets/images/15.jpg';
import image16 from '@/assets/images/16.jpg';
import image17 from '@/assets/images/17.jpg';
import image18 from '@/assets/images/18.jpg';
import image19 from '@/assets/images/19.jpg';
import image20 from '@/assets/images/20.jpg';

// 세로 사진: 1000 x 1500, 가로 사진(13번): 1500 x 1000
const P = { width: 1000, height: 1500 };
const L = { width: 1500, height: 1000 };

const images = [
  { alt: 'image01', source: image01, ...P },
  { alt: 'image02', source: image02, ...P },
  { alt: 'image03', source: image03, ...P },
  { alt: 'image04', source: image04, ...P },
  { alt: 'image05', source: image05, ...P },
  { alt: 'image06', source: image06, ...P },
  { alt: 'image07', source: image07, ...P },
  { alt: 'image08', source: image08, ...P },
  { alt: 'image09', source: image09, ...P },
  { alt: 'image10', source: image10, ...P },
  { alt: 'image11', source: image11, ...P },
  { alt: 'image12', source: image12, ...P },
  { alt: 'image13', source: image13, ...L },
  { alt: 'image14', source: image14, ...P },
  { alt: 'image15', source: image15, ...P },
  { alt: 'image16', source: image16, ...P },
  { alt: 'image17', source: image17, ...P },
  { alt: 'image18', source: image18, ...P },
  { alt: 'image19', source: image19, ...P },
  { alt: 'image20', source: image20, ...P },
];

export default images;
