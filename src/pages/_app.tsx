import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {reduxStore} from "@/redux/redux";

export default function App({Component, pageProps}: AppProps) {
    return <Provider store={reduxStore}>
        <Component {...pageProps} />
    </Provider>
}
