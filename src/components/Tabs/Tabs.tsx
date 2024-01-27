import React from 'react';
import {Tabs as TabsAntd} from "antd/lib";
import style from "./Tabs.module.css";

interface TabsProps {
  items: { label: string, key: string }[]
  selectedTab: string
  onChange: (val: string) => void
}

const Tabs = ({items, selectedTab, onChange}: TabsProps) => {
  return <TabsAntd
    className={style.tabs}
    tabPosition={'right'}
    defaultActiveKey={selectedTab}
    onChange={onChange}
    items={items}
  />
};


export default Tabs