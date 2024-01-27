import React from 'react';
import {Button as ButtonAntd} from "antd/lib";
import style from "./Button.module.css";


interface ButtonProps {
  onClick: () => void
  label: string
}

const Button = ({label, onClick}: ButtonProps) => {

  return <ButtonAntd className={style.button} type="primary" onClick={onClick}>{label}</ButtonAntd>
};


export default Button