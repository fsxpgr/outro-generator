import React from 'react';
import {Input as InputAntd} from "antd/lib";
import {CommentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons";

interface ChartCardProps {
  onChange: (val: string) => void
  value: string
  limit: number

}

const TextArea = ({value, onChange, limit}: ChartCardProps) => {
  return <InputAntd.TextArea
    showCount
    maxLength={limit}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Type your custom call to action here"
    value={value}
    style={{height: 94, width: 352, resize: 'none'}}
  />
};


export default TextArea