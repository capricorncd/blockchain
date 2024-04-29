import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(props: { children: JSX.Element }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 仅在路由变化时执行

  return props.children;
}
