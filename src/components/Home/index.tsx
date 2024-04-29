/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/09/09 21:46:42 (GMT+0900)
 */
import { Wrapper } from '../Ui';

export function Home() {
  return (
    <main>
      <h2>Welcome to the homepage!</h2>
      <Wrapper ta="center">
        <img
          src="https://source.unsplash.com/random"
          className="App-logo"
          alt="logo"
          style={{ maxWidth: '100%' }}
        />
      </Wrapper>
    </main>
  );
}
