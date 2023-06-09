'use client'

import { IconType } from "react-icons";

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  black?: boolean
  icon?: IconType
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Button({black, onClick, label, icon:Icon,  onMouseEnter, onMouseLeave}:ButtonProps) { 

  const buttonEnter = () => {
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const buttonLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return(
    <button
    onClick={onClick}
    onMouseEnter={buttonEnter} 
    onMouseLeave={buttonLeave} 
    className={`
    flex justify-between px-1 pl-4 items-center gap-4 py-[5px]  rounded-full
    ${black ? 'bg-black text-white' : 'bg-gray-300'}
    `}
  >
  {label}
    {Icon && (
      <Icon
        size={28}
        className="
          
        "
      />
    )}
        </button>
    )
}
 
