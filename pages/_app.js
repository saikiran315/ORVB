import "../styles/globals.css";

// import { AuthUserProvider } from "../context/AuthUserContext";

import { AuthContextProvider } from "../context/AuthUserContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
