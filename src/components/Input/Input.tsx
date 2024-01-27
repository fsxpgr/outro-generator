import React from 'react';
import {Input as InputAntd} from "antd/lib";
import style from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (val: string) => void
}

const Input = ({value, onChange}: InputProps) => {
  return <InputAntd className={style.input} value={value} onChange={e => onChange(e.target.value)}/>
};


export default Input