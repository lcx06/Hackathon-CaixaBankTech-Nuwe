import data from './data';
import {ApiResult} from "./index";

export interface Transaction {
    date: Date,
    amount: number,
    type?: string,
}

export function getTransactions(): Promise<ApiResult> {
    return new Promise<ApiResult>((resolve) => {
        resolve({success: true, data: data.transactions});
    });
}