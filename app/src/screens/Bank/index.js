import React, { useState, useEffect } from 'react';
import { CreditCard } from '../../components';
import { motion } from 'framer-motion';
import { Input, Select, Typography, Image, message, Button } from 'antd';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';
import _bank from './bank.json';
import InputMask from 'react-input-mask';
import api from '../../api/';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';


export default function Three({ onOk }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [bank, setBank] = useState({
  bankName: '',
  number: '',
  name: '',
});

useEffect(() => {
  (async () => {
    setLoading(true);
    const { data } = await api.get('/link/bank');
    console.log(data); // In dữ liệu bank ra console
    const { bank_name, number, name } = data.data;
    setBank({
      bankName: bank_name || '',
      number: number || '',
      name: name || '',
    });
    setLoading(false);
  })();
}, []);
  return (
    <motion.div
      style={{ padding: '10px 15px' }}
      initial={{ opacity: 0.3, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 5,
          borderBottom: '1px solid #eee',
        }}
      >
        <motion.div
          whileTap={{ scale: 0.95, x: -10 }}
          onClick={() => history.replace('/')}
          style={{ padding: 0 }}
        >
          <LeftOutlined style={{ fontSize: 25, color: '#555' }} />
        </motion.div>
        <Typography.Text strong style={{ fontWeight: 700, fontSize: 20 }}>
          Thông tin trả nợ
        </Typography.Text>
        <div></div>
      </div>

      <CreditCard
        logoBank={bank.logo}
        name={bank.name}
        bankNumber={bank.number}
        nameBank={bank.bankName}
        bankDate={bank.date}
      />
      <div style={{ padding: 20 }}>
        <Input
          size="large"
          placeholder="Số tài khoản" 
          type="number"
          prefix={<GlobalOutlined className="information-icon" />}
          value={bank.number}
          readOnly
          className="bank-input"
        />
        <Input
          value={bank.name}
          size="large"
          placeholder="Tên chủ tài khoản"
          prefix={<UserOutlined className="information-icon" />}
          readOnly
          className="bank-input"
        />
        <Input
          value={bank.bankName}
          size="large"
          placeholder="Tên ngân hàng"
          prefix={<UserOutlined className="information-icon" />}
          readOnly
          className="bank-input"
        />
        {/* <Select
          className="select-bank"
          placeholder="Chọn ngân hàng thụ hưởng"
          onChange={(e) =>
            setState({
              ...state,
              bankName: e.split('@')[0],
              logo: e.split('@')[1],
            })
          }
        >
          {_bank.banksnapas.map((item) => (
            <Select.Option value={`${item.shortName}@${item.logo}`}>
              <div>
                <Typography.Text strong> {item.shortName}</Typography.Text> -{' '}
                <Typography.Text>{item.vn_name}</Typography.Text>
              </div>
              {item.logo && (
                <Image src={item.logo} preview={false} width="20%" />
              )}
            </Select.Option>
          ))}
        </Select> */}
        {/* <div className="send-request-div">
          <Button className="confirm-btn" onClick={onConfirm}>
            <Typography.Text className="confirm-div-title">
              Gửi yêu cầu
            </Typography.Text>
          </Button>
        </div> */}
      </div>
    </motion.div>
  );
}
