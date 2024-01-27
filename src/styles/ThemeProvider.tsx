import {ConfigProvider} from "antd/lib";

// @ts-ignore
export const ThemeProvider = ({children}) => <ConfigProvider
  theme={{
    components: {
      Tabs: {
        itemSelectedColor: "#2237FF",
        inkBarColor: "#2237FF"
      },
    },
  }}
>
  {children}
</ConfigProvider>