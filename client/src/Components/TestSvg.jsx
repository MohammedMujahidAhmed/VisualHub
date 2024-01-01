import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const svgs = [
  '<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="428" cy="144" fill="#00CC99" r="357"></circle><circle cx="766" cy="502" fill="#6600FF" r="357"></circle><circle cx="815" cy="164" fill="#00CC99" r="357"></circle><circle cx="314" cy="330" fill="#00CC99" r="357"></circle><circle cx="607" cy="108" fill="#6600FF" r="357"></circle><circle cx="89" cy="561" fill="#00CC99" r="357"></circle></g></svg>',
  '<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="816" cy="568" fill="#00CC99" r="357"></circle><circle cx="442" cy="173" fill="#6600FF" r="357"></circle><circle cx="200" cy="371" fill="#00CC99" r="357"></circle><circle cx="837" cy="335" fill="#00CC99" r="357"></circle><circle cx="114" cy="54" fill="#6600FF" r="357"></circle><circle cx="530" cy="342" fill="#00CC99" r="357"></circle></g></svg>',
  '<svg id="visual3" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="264" cy="287" fill="#00CC99" r="357"></circle><circle cx="247" cy="515" fill="#6600FF" r="357"></circle><circle cx="372" cy="116" fill="#00CC99" r="357"></circle><circle cx="474" cy="520" fill="#00CC99" r="357"></circle><circle cx="662" cy="401" fill="#6600FF" r="357"></circle><circle cx="790" cy="240" fill="#00CC99" r="357"></circle></g></svg>',
];

const TestSvg = () => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.5 },
    reset: true,
    config: { duration: 1000, easing: (t) => t * t },
    onRest: () => setIndex((index + 1) % svgs.length),
  });

  const svgMarkup = svgs[index];

  return (
    <animated.div style={props} dangerouslySetInnerHTML={{ __html: svgMarkup }} />
  );
};

export default TestSvg;
