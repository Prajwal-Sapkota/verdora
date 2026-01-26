import { useEffect, useRef, useState } from "react";
import {

  FaUserTie,
  FaUtensils,
  FaSpa,
  FaConciergeBell,
} from "react-icons/fa";

const Team = () => {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const teamMembers = [
    {
      name: "Emily Johnson",
      position: "Front Office Manager",
      experience: "10 years",
      image: "/images/frontmanager.jpg",
      icon: <FaUserTie className="text-xl" />,
      specialties: ["Guest Relations", "Operations", "VIP Services"],
    },
    {
      name: "David Martinez",
      position: "Head Chef",
      experience: "12 years",
      image: "/images/headchef.webp",
      icon: <FaUtensils className="text-xl" />,
      specialties: ["Fine Dining", "Menu Design", "Culinary Training"],
    },
    {
      name: "Sarah Brown",
      position: "Spa Manager",
      experience: "5 years",
      image: "/images/spamanager.jpg",
      icon: <FaSpa className="text-xl" />,
      specialties: ["Wellness Programs", "Therapy Sessions", "Holistic Care"],
    },
    {
      name: "Michael Lee",
      position: "Chief Concierge",
      experience: "7 years",
      image: "/images/chief.jpg",
      icon: <FaConciergeBell className="text-xl" />,
      specialties: ["Itinerary Planning", "Local Expertise", "Event Coordination"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#f5f2ed] py-16 sm:py-20 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-sm">
            Meet Our Experts
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#262626] leading-tight mt-4 max-w-7xl mx-auto">
            Staff Who Provide Exceptional Comfort <br className="hidden lg:block" />
            And Create A Great Mood
          </h1>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-full shadow-xl group mx-auto max-w-[260px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />


              </div>

              {/* CONTENT (SEPARATE FROM IMAGE) */}
              <div className="mt-6 text-center px-2">
                <h3 className="text-xl font-bold text-[#262626]">
                  {member.name}
                </h3>

                <p className="text-[#ab8c55] font-medium mt-1">
                  {member.position}
                </p>

                <p className="text-[#262626]/70 text-sm mt-3">
                  Work Experience: {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
};

export default Team;
