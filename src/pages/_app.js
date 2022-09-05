import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { FormContextProvider } from "../contexts/FormContext";

function MyApp({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  );
}

export default MyApp;
