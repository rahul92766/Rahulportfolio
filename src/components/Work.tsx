import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "Govt Site Engineer (ICAR-NBPGR)", category: "Project", tools: "Windows OS, Zoom, IT Inventory", image: "/images/icar_nbpgr.png" },
            { name: "Delhi Home Guards Setup", category: "Project", tools: "Network Devices, Backup Strategies", image: "/images/placeholder.webp" },
            { name: "New Office Setup", category: "NGO Project", tools: "CCTV, Telephones, Workstations", image: "/images/placeholder.webp" },
            { name: "Cloud Migration", category: "Migration", tools: "Windows, Linux, Cloud Services", image: "/images/placeholder.webp" },
            { name: "Diploma in Hardware & Networking", category: "Certification", tools: "Jetking (2016)", image: "/images/placeholder.webp" },
            { name: "Bachelor of Arts", category: "Education", tools: "University of Delhi (2019)", image: "/images/placeholder.webp" }
          ].map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Details</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
