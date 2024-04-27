/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2024/04/27 09:52:56 (GMT+0900)
 */
import { usePropStyles, ReactBaseProps, f } from '@prop-styles/react';
import { classNames } from '@zx-libs/utils';

interface Props extends ReactBaseProps {
  mh?: string | number;
}

export function Wrapper(props: Props) {
  const { style } = usePropStyles(props, {
    mh: (v: Props['mh']) => f('minHeight', v),
  });

  return (
    <div className={classNames(props.className)} style={style}>
      {props.children}
    </div>
  );
}
