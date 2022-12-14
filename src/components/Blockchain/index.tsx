/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/06/07 23:01:42 (GMT+0900)
 */
import { Divider } from 'antd';
import { BlockchainProvider } from './context';
import { Form } from './form';
import { Head } from './head';

export function Blockchain() {
  return (
    <BlockchainProvider>
      <Divider>
        <h2>Blockchain</h2>
      </Divider>
      <Head />
      <Form />

      <Divider>README</Divider>

      <section style={{ textAlign: 'center' }} className="break">
        A blockchain is a type of Digital Ledger Technology (DLT) that consists
        of growing list of records, called blocks, that are securely linked
        together using cryptography.
        <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank">
          https://en.wikipedia.org/wiki/Blockchain
        </a>
      </section>
    </BlockchainProvider>
  );
}
