import { GiPerson, GiMoneyStack } from "react-icons/gi";
import { BiCodeAlt } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { MdAddAlert, MdRadio, MdOutlineEscalatorWarning } from "react-icons/md";
import moise from "../assets/leadership/moise.jpg";
import gloire from "../assets/leadership/gloire.jpeg";
import clapton from "../assets/leadership/clapton.jpg";
import akim from "../assets/leadership/akim.jpeg";

export const cardData = [
    { icon: <GiPerson className="bg-orange-100 text-orange-500 rounded-full" />, titre: 'Pladoyers', desc: 'Rencontre avec les autorités' },
    { icon: <MdAddAlert className="bg-blue-100 text-blue-500 rounded-full" />, titre: 'Sittins', desc: "Devant les bureaux d'administartion public" },
    { icon: <MdOutlineEscalatorWarning className="bg-yellow-100 text-yellow-500 rounded-full" />, titre: 'Marches', desc: 'Des marches pacifiques dans la rue' },
    { icon: <MdRadio className="bg-green-100 text-green-500 rounded-full" />, titre: 'Emissions', desc: 'Revendications sur les médias sur les questions sociales' },
]

export const cardServicesData = [
    { icon: <RiComputerFill className="bg-green-100 text-green-500 rounded-full" />, titre: 'Accompagnement', desc: 'En tout besoin technologique, nous vous aidons pour trouver des solutions à vos problème' },
    { icon: <IoSchool className="bg-yellow-100 text-yellow-500 rounded-full" />, titre: 'Education', desc: 'Nous formons les enfants, jeunes et adultes dans divers domaines' },
    { icon: <GiMoneyStack className="bg-blue-100 text-blue-500 rounded-full" />, titre: 'Blockchain', desc: "La technologie blockchain nous aide à soutenir nos différentes actions" },
    { icon: <BiCodeAlt className="bg-orange-100 text-orange-500 rounded-full" />, titre: 'Programmation', desc: "Nous concevons des sites web et tout type d'application" },
]

export const leaderData = [
    {
        nom: 'Gloire Mutaliko',
        fonction: 'CTO',
        linkedin: 'https://linkedin.com/in/gloire-mutaliko-2b6733211',
        twitter: 'https://twitter.com/GloireMutaliko',
        profileImg: gloire
    },
    {
        nom: 'Akim Cizungu',
        fonction: 'CEO',
        linkedin: 'https://linkedin.com/in/gloire-mutaliko-2b6733211',
        twitter: 'https://twitter.com/GloireMutaliko',
        profileImg: akim
    },
    {
        nom: 'Erick Clapton',
        fonction: 'COO',
        linkedin: 'https://linkedin.com/in/gloire-mutaliko-2b6733211',
        twitter: 'https://twitter.com/GloireMutaliko',
        profileImg: clapton
    },
    {
        nom: 'Moise Nturubika',
        fonction: 'Administrateur',
        linkedin: 'https://linkedin.com/in/gloire-mutaliko-2b6733211',
        twitter: 'https://twitter.com/GloireMutaliko',
        profileImg: moise
    },
]