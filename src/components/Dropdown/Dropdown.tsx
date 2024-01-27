import React from 'react';
import {Select as DropdownAntd} from "antd/lib";
import {CommentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons";

interface DropdownProps {
  options: { label: string, value: string }[]
  onChange: (val: string) => void
  value: string
}

const Dropdown = ({options, onChange, value}: DropdownProps) => {
  return <DropdownAntd style={{width: 155, height: 32}} defaultValue={'Select'} options={options} onChange={onChange}
                       value={value}/>
};


export default Dropdown