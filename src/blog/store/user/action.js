import * as apiUser from '../../../common/api/user';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
    name: 'user',
    effects: {
        //  获取列表
        *getSizeInfo({payload}) {
            try {
               const data = yield call(apiUser.getSizeInfo, payload);
               yield put({
                   type: 'article/getSizeInfo/success',
                   payload: data
               })
             } catch(e) {}
       },
    }
}