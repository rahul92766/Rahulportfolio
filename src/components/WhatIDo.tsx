import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    containerRef.current.forEach((container) => {
      if (container) {
        // Remove noTouch class to standardize behavior, or just handle clicks
        container.classList.remove("what-noTouch");
        container.addEventListener("click", () => handleClick(container));
      }
    });
    
    // Set first item as active by default
    if (containerRef.current[0]) {
      containerRef.current[0].classList.add("what-content-active");
      if (containerRef.current[1]) {
        containerRef.current[1].classList.add("what-sibling");
      }
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>HARDWARE</h3>
              <h4>Description</h4>
              <p>
                Windows OS maintenance, hardware installation, PC Assembly, system recovery, and data backup strategies.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Windows (7, 8, 10, 11)</div>
                <div className="what-tags">Windows Server 2008</div>
                <div className="what-tags">PC Assembly</div>
                <div className="what-tags">Printer/Scanner Setup</div>
                <div className="what-tags">BitLocker</div>
                <div className="what-tags">System Recovery</div>
                <div className="what-tags">Data Backup</div>
                <div className="what-tags">CCTV Installation</div>
                <div className="what-tags">Zoom Meetings</div>
                <div className="what-tags">Malware/Ransomware Removal</div>
                <div className="what-tags">AEBAS Aadhar Setup</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>NETWORKING</h3>
              <h4>Description</h4>
              <p>
                LAN management, router configuration, firewall management, troubleshooting, and network optimization.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">LAN Management</div>
                <div className="what-tags">Router Configuration</div>
                <div className="what-tags">Firewall Management</div>
                <div className="what-tags">Network Troubleshooting</div>
                <div className="what-tags">VoIP Phones</div>
                <div className="what-tags">Cloud Migration</div>
                <div className="what-tags">Ubuntu</div>
                <div className="what-tags">Linux</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
