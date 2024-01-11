import { useRef } from "react";
import "./About.css";

export const About = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%About render:" + ref.current.toString(), "color: green");

  return <div className="about-container">
    <h1>The Moose Tracker v2</h1>
    <p>
      this that crazy silly moose sighting app ya feel me
    </p>
    <p>
      Man I do love some meese. Very big very powerful like a mountain
    </p>
    <p>
    Chambray venmo photo booth cliche, same bespoke polaroid microdosing mixtape fanny pack knausgaard. Taiyaki air plant live-edge, vaporware asymmetrical fam neutra same fanny pack plaid hexagon big mood blackbird spyplane meggings edison bulb. Narwhal pug farm-to-table, whatever fanny pack dreamcatcher cornhole irony listicle locavore hella hot chicken DIY jianbing. Taxidermy iPhone wolf forage ramps. Fixie quinoa health goth bruh occupy master cleanse sriracha. Ethical copper mug same try-hard jianbing hammock, paleo bicycle rights bitters DIY ramps Brooklyn gochujang. Post-ironic keytar fingerstache, actually air plant palo santo grailed.
    </p>
    <p>
      bottom text goes here
    </p>
  </div>;
};
