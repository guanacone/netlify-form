import React, { useEffect } from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import Typography from '../styles/Typography';

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <GlobalStyle/>
      <Typography/>
      {children}
    </div>
  );
};

export default Layout;
