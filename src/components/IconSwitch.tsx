import { JSX } from "react";
import IconSwitchInterface from "../Interfaces/IconSwitchInterface";

const IconSwitch = (props: IconSwitchInterface): JSX.Element => {
  return (
    <>
      <div className="toolbar">
        <div className={props.icon === 'view_module' ? "view_list_btn" : "view_module_btn"} onClick={props.onSwitch}><span className="material-icons">{props.icon}</span></div>
      </div>
    </>
  )
}

export default IconSwitch;