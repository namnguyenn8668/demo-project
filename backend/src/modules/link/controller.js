import * as service from './services';
import * as contractService from '../contracts/services';
import * as requestService from '../requests/services';
import * as paymentService from '../payments/services';
import Link from '../../collections/link';
import Bank from '../../collections/bank';


export const create = async (req, res) => {
  const { link } = req.body;
  const data = await Link.create({
    link: link
  });
  return true;
}

export const getAllLink = async (req, res) => {
  try {
    const data = await service.getAllLink();
    return res.status(200).json({ data: data[0] });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const { _id } = req.params;
    const payload = req.body;
    await service.updateLink({
      _id, payload
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const createBank = async (req, res) => {
  // eslint-disable-next-line camelcase
  const { bank_name, number, name } = req.body;
  const data = await Bank.create({
    bank_name, number, name
  });
  return true;
}

export const updateBank = async (req, res) => {
  try {
    const { _id } = req.params;
    const payload = req.body;
    await service.updateBank({
      _id, payload
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getBanks = async (req, res) => {
  try {
    const data = await service.getBanks();
    return res.status(200).json({ data: data[0] });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
