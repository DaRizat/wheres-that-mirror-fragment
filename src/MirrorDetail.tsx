import { fragmentDetails } from "./fragmentDetails";

type MirrorDetailProps = {
  index: number
  visible: boolean
  x: number
  y: number
}

export const MirrorDetail = ({ index, visible, x, y }: MirrorDetailProps) => {
  return visible ? (
    <div
      className="mirror-details"
      style={{ top: y, left: x, zIndex: 10, position: 'absolute' }}
    >
      <img src={`/details/fragment_${index}.png`} className="w-[480px]" />
      <div className="text-2xl text-white mt-4">
        {fragmentDetails[`fragment_${index}`].description}
      </div>
    </div>
  ) : null;
}
