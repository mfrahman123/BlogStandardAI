import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

export const Logo = () => {
    return <div className="text-3xl text-center py-4 font-heading">
        BlogStandard
        <FontAwesomeIcon icon={faBrain} className="text-2xl text-slate-400"/>
        </div>
};