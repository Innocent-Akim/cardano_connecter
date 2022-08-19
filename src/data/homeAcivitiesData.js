import { GiPerson } from "react-icons/gi";
import { MdAddAlert, MdRadio, MdOutlineEscalatorWarning } from "react-icons/md";

export const cardData = [
    { icon: <GiPerson className="bg-orange-100 text-orange-500 rounded-full" />, titre: 'Pladoyers', desc: 'Rencontre avec les autorités' },
    { icon: <MdAddAlert className="bg-blue-100 text-blue-500 rounded-full" />, titre: 'Sittins', desc: "Devant les bureaux d'administartion public" },
    { icon: <MdOutlineEscalatorWarning className="bg-yellow-100 text-yellow-500 rounded-full" />, titre: 'Marches', desc: 'Des marches pacifiques dans la rue' },
    { icon: <MdRadio className="bg-green-100 text-green-500 rounded-full" />, titre: 'Emissions', desc: 'Revendications sur les médias sur les questions sociales' },
]