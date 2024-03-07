import { useRef } from "react";

import "./Regs.css";

export const Regs = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%Regs render:" + ref.current.toString(), "color: yellow");

  const contentsMap = [
    {
      name: 'Region 1: Vancouver Island',
      link: 'region1_vancouver_island.pdf'
    },
    {
      name: 'Region 2: Lower Mainland',
      link: 'region2_lower_mainland.pdf'
    },
    {
      name: 'Region 3: Thompson',
      link: 'region3_Thompson.pdf'
    },
    {
      name: 'Region 4: Kootenay',
      link: 'region4_kootenay.pdf'
    },
    {
      name: 'Region 5: Cariboo',
      link: 'region5_cariboo.pdf'
    },
    {
      name: 'Region 6: Skeena',
      link: 'region6_skeena.pdf'
    },
    {
      name: 'Region 7a: Omineca',
      link: 'region7a_omineca.pdf'
    },
    {
      name: 'Region 7b: Peace',
      link: 'region7b_peace.pdf'
    },
    {
      name: 'Region 8: Okanagan',
      link: 'region8_okanagan.pdf'
    },
  ]

  return (
    <div className="regs-component">
      <div className="table-of-contents">
        <h1>Regulations</h1>
        <a href='hunting-trapping-synopsis.pdf' className="link">
          <div className="pdf">Full Hunting and Trapping Regulations Synopsis 2022-2024</div>
        </a>
        <h2 className="title">
          Contents By Region
        </h2>
        {contentsMap.map((content) => {
        return (
          <a href={content.link} className="link">
            <div>
              {content.name}
            </div>
          </a>
          )
        })}
      </div>
    </div>
)}
