import React from 'react';
import {Tooltip as TooltipAntd} from "antd/lib";

interface TooltipProps {
  label: string
}

const Tooltip = ({label}: TooltipProps) => {
  return (
    <TooltipAntd title={label}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7.5" stroke="black"/>
        <path d="M8 4V7.55556" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11.1133H8.00889" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </TooltipAntd>
  )
};


export default Tooltip