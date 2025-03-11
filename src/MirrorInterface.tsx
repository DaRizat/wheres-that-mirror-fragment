import {MirrorFragment} from "./MirrorFragment";

export const MirrorInterface = () => {
  const mirrorSlots = [...Array(75).keys()];
  return (
    <>
      <div className="mirror-container">
        {mirrorSlots.map((slot) => (
          <MirrorFragment key={`mirror-fragment-${slot+1}`} index={slot+1} />
        ))}
      </div>
    </>
  )
}
