import Link from '../../collections/link';
import Bank from '../../collections/bank';
import Company from '../../collections/company';
import _ from 'lodash';
import config from '../../app.config';
import * as paymentService from '../payments/services';
import Contract from '../../collections/contract';
import moment from 'moment';
import { ChoiceThePossibleSupporter, addUserToList } from '../company/services';

export const getAllLink = async () => {
  const data = await Link.find({});
  return data;
};

export const updateLink = async ({ _id, payload }) => {
  const data = await Link.findByIdAndUpdate(_id, { ...payload });
  if (!data) throw new Error('Category is not existed');
  return true;
};

export const getBanks = async () => {
  const data = await Bank.find({});
  return data;
};

export const updateBank = async ({ _id, payload }) => {
  const data = await Bank.findByIdAndUpdate(_id, { ...payload });
  if (!data) throw new Error('Bank is not existed');
  return true;
};
