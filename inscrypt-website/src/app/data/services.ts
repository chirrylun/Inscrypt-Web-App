import { Service } from "../types/Service"
import { IoIosDesktop } from "react-icons/io"
import { CiMobile1 } from "react-icons/ci"
import { BsPalette2 } from "react-icons/bs"
import { RiTeamFill } from "react-icons/ri"

export const services : Service[]=[
    {
        name: "Website Design & Development",
        description: "We create stunning, responsive websites that captivate your audience and drive results.",
        icon: IoIosDesktop,
        color: "bg-indigo-600",
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
        link: "/websitedevelopment"
      },
      {
        name: "Mobile Application Development",
        description: "Extend your reach with custom mobile apps that engage users on the go.",
        icon: CiMobile1,
        color: "bg-blue-600",
        gradient: "bg-gradient-to-br from-blue-500 to-teal-400",
        link: "/mobileappdevelopment"
      },
      {
        name: "UX/UI Design & Research",
        description: "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
        icon: BsPalette2,
        color: "bg-indigo-600",
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
        link: "/uxuidesign&research"
      },
      {
        name: "In-house Tech Team",
        description: "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
        icon: RiTeamFill,
        color: "bg-blue-600",
        gradient: "bg-gradient-to-br from-blue-500 to-teal-400",
        link: "/inhousetechteam"
      },
      {
        name: "Digital Marketing",
        description: "Get your brand in front of your potential customers the right way with a dedicated team of experts.",
        icon: RiTeamFill,
        color: "bg-indigo-600",
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
        link: "/digitalmarketing"
      },
]

