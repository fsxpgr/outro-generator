import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import styles from "@/styles/App.module.css";
import {Manrope} from "next/font/google";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Tabs from "@/components/Tabs/Tabs";
import {ConfigProvider} from "antd/lib";
import {ThemeProvider} from "@/styles/ThemeProvider";
import Tooltip from "@/components/Tooltip/Tooltip";
import Dropdown from "@/components/Dropdown/Dropdown";
import TextArea from "@/components/TextArea/TextArea";

const font = Manrope({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});

const tabs = [
  {
    label: `Text`,
    key: 'text',
  },
  {
    label: `Logo`,
    key: 'logo',
  }, {
    label: `Outro`,
    key: 'outro',
  },
  {
    label: `Custom brand kit`,
    key: 'custom',
  }
]

const dropDownOptions = [
  {value: '', label: 'Select'},
  {value: 'spotify', label: 'Listen on Spotify'},
  {value: 'apple', label: 'Listen on Apple'},
  {value: 'google', label: 'Listen on Google'},
]

export default function App({Component, pageProps}: AppProps) {
  const [brandKitName, setBrandKitName] = useState('My Brand kit')
  const [callToActionValue, setCallToActionValue] = useState('')
  const [customToActionValue, setCustomCallToActionValue] = useState('')


  async function onSave() {
    try {
      let outroText = ''
      if (callToActionValue) {
        outroText = dropDownOptions?.find(it => it.value === callToActionValue)?.label || ''
      } else {
        outroText = customToActionValue
      }

      await fetch('/api/outro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({brandKitName, outroText}), // body data type must match "Content-Type" header
      });

    } catch (e) {
      console.log('error while saving data', e)
    }
  }

  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <ThemeProvider>
      <main className={`${styles.main} ${font.className}`}>

        <header className={`${styles['main-header']}`}>
          <h2>Brand kit name</h2>

          <Input value={brandKitName} onChange={setBrandKitName}/>
        </header>

        <section className={`${styles.section}`}>
          <Tabs items={tabs} selectedTab={'outro'} onChange={(key) => {
          }}/>

          <div className={`${styles.content}`}>
            <header className={styles.header}>
              <h3>Outro</h3>
              <Tooltip label={'We will show the call to action at the end of the clip'}/>
            </header>

            <div className={styles.field} style={{marginBottom: 48}}>
              <p>Call to action</p>
              <Dropdown
                options={dropDownOptions}
                onChange={(val) => {
                  setCustomCallToActionValue('')
                  setCallToActionValue(val)
                }}
                value={callToActionValue}
              />
            </div>


            <div className={styles.field}>
              <p>Custom call to action</p>
              <TextArea
                onChange={(val) => {
                  setCallToActionValue('')
                  setCustomCallToActionValue(val)
                }}
                value={customToActionValue}
                limit={20}
              />
            </div>

          </div>
        </section>

        <Button onClick={onSave} label={"Save"}/>

      </main>
    </ThemeProvider>

  </>;
}
