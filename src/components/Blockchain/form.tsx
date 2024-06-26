/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/08/09 20:02:43 (GMT+0900)
 */
import { Input, Button, Divider, Space } from 'antd';
import { useState, useRef } from 'react';
import { useBlockchain } from './context';

export function Form() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const store = useBlockchain();

  const {
    addTransaction,
    writeToBlockchain,
    transactions,
    tamper,
    blocks,
    clearAllBlockchain,
  } = store;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Divider>Operate</Divider>
      <Space
        direction="vertical"
        align="center"
        style={{ maxWidth: '100%', overflow: 'hidden' }}
      >
        <Input.Group compact style={{ width: '320px', maxWidth: '100%' }}>
          <Input
            value={value}
            ref={inputRef}
            style={{ width: 'calc(100% - 136px)' }}
            placeholder="Please enter transaction name"
            onChange={(e) => setValue(e.currentTarget.value)}
            onPressEnter={() => {
              if (!value) return;
              addTransaction(value);
              setValue('');
            }}
          />
          <Button
            style={{ width: '136px' }}
            type="primary"
            disabled={!value}
            onClick={() => {
              addTransaction(value);
              setValue('');
            }}
          >
            Add transaction
          </Button>
        </Input.Group>
      </Space>

      <Divider>Transactions that are not on the blockchain</Divider>
      <ul>
        {transactions.map((item, index) => (
          <li key={index} className="break">
            {item.id}: {item.name}
          </li>
        ))}
      </ul>

      <Space>
        <Button
          type="primary"
          disabled={!transactions.length}
          onClick={() => writeToBlockchain()}
        >
          Write to the blockchain
        </Button>
      </Space>

      <Divider>Transactions already on the blockchain</Divider>
      <ul>
        {blocks.map((item, index) => (
          <li key={index} className="break">
            {item.hash}: {item.transactions.join(', ')}
          </li>
        ))}
      </ul>

      <Space>
        <Button disabled={!blocks.length} danger onClick={() => tamper()}>
          Tamper
        </Button>
        <Button disabled={!blocks.length} onClick={() => clearAllBlockchain()}>
          Clear all blockchains
        </Button>
      </Space>
    </div>
  );
}
