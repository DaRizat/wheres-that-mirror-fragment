import {useState} from "react"
import {MirrorDetail} from "./MirrorDetail"
import {fragmentAssets, fragmentCoordinates} from "./fragmentMap";

export const MirrorFragment = ({ index }: { index: number }) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseEnter = (e:React.MouseEvent) => {
    setVisible(true);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = e.clientX - 250;
    let y = e.clientY - 150;

    // Simple logic to keep it on screen
    if (x + 800 > screenWidth) x = x - 600 // Assuming tooltip width is 200px
    if (y + 700 > screenHeight) y = screenHeight - 700; // Assuming tooltip height is 50px

    setX(x);
    setY(y);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const Fragment = fragmentAssets[`fragment_${index}`];

  return (
    <>
      <div
        style={{
          left: fragmentCoordinates[`fragment_${index}`].x,
          top: fragmentCoordinates[`fragment_${index}`].y,
          position: 'absolute',
          opacity: 0,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={Fragment} alt={`Fragment ${index}`} style={{
          width: fragmentCoordinates[`fragment_${index}`].w || 70,
          height: fragmentCoordinates[`fragment_${index}`].h || 70,
        }} />
      </div>
      <MirrorDetail index={index} visible={visible} x={x} y={y} />
    </>
  )
}
