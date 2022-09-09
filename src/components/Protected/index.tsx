/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/09 21:46:09 (GMT+0900)
 */
import { Button } from 'antd';
import { useState } from 'react';

export function ProtectedPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Protected Page</h2>

      <Button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
    </>
  );
}
