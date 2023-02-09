import React from "react";
import Heading from "../../layout/Heading/Heading";
import ListImgItem from "./ListImgItem";

const JuryData = [
  {
    id: 1504221460,
    img: "https://yomacenter.se/wp-content/uploads/2022/05/StenCranner_fotoDanHolmqvist_GSO-1024x683.jpg",
    name: "Sten Cranner",
    titel: "Head of the jury",
    instrument: "",
    country: "Sweden",
    description:
      "Polstjärnepriset welcomes Sten Cranner as head of the jury. Cranner is general manager and artistic director of the Gothenburg Symphony Orchestra, where he has been planning manager since 2010. He was general manager of the Bergen Philharmonic Orchestra in 2006-2010 and orchestral manager of the Gothenburg Symphony Orchestra in 2003-2007. Before that, he was project manager at the Oslo Philharmonic in 2000-2002, and he has also worked with other professional ensembles in Norway. Cranner has been head of the Polstjärnepriset jury on several occasions and initiated the current collaboration between Polstjärnepriset and the Gothenburg Symphony Orchestra.",
  },
  {
    id: 522558645,
    img: "https://yomacenter.se/wp-content/uploads/2022/05/camillalundberg.jpg",
    name: "Camilla Lundberg",
    titel: "Assistant head of the jury",
    country: "Norway/Sweden",
    description:
      "Polstjärnepriset welcomes Camilla Lundberg as assistant head of the jury. Camilla is a well-known culture personality in the press, radio and television. She has a solid background as a music critic at Dagens Nyheter, Expressen and Kulturnyheterna, SVT. On Swedish radio she can be heard in the popular “Klassiska podden” and among the music experts in “CD-revyn”. Camilla Lundberg has long experience from jury work: in addition to several music competitions also the Guldbagge Awards, Prix Italia and Rose d’Or. As an amateur cellist, she enjoys playing string quartets.",
  },
  {
    id: 566073352,
    img: "https://yomacenter.se/wp-content/uploads/2022/06/randi-2048x1365.jpg",
    name: "Randi Krogvold Lundqvist",
    instrument: "Woodwinds",
    country: "Norway",
    description:
      "Randi Krogvold Lundqvist has a deep and versatile background as a musician and teacher, with a special focus on talent development. She is currently head of the wind department at Barratt Due Musikkinstitutt in Oslo and has for many years held the same position at Valdres sommersymfoni. Randi studied at the Norwegian Academy of Music, has worked in all the major Norwegian orchestras and performed at leading festivals in Norway and abroad.",
  },
  {
    id: 4288427256,
    img: "https://www.gso.se/wp-content/uploads/2016/09/perivarsson-glad_750x750_acf_cropped.jpg",
    name: "Per Ivarsson",
    instrument: "Brass",
    country: "Sweden",
    description:
      "Per Ivarsson is the Principal Trumpet of the Gothenburg Symphony Orchestra and teaches at the Academy of Music and Drama, Gothenburg University. In 2015-2016 he served as Principal Trumpet of the Oslo Philharmonic and began his soloist diploma studies under professor Håkan Hardenberger in Malmö. After that he moved to Karlsruhe, where he had the opportunity to explore baroque repertoire on original instruments, as well as contemporary music with Ensemble Phoenix in Basel. On his return to Sweden, he was appointed Co-Principal Trumpet of the Malmö Symphony Orchestra, and won his current position in Gothenburg a few years later.",
  },
];

const ListImg = () => {
  return (
    <section className="container py-5">
      <Heading Heading="List w. img" />
      <ul className="list-unstyled  col-md-12 col-lg-8">
        {JuryData.map((eachMember) => (
          <ListImgItem key={eachMember.id} juryData={eachMember} />
        ))}
      </ul>
    </section>
  );
};

export default ListImg;
