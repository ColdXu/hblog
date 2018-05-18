import * as apiArticle from '../../../common/api/article';
import { call, put, take } from 'redux-saga/effects'
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
        //  获取列表
        *setHeader({payload}) {
            try {
               yield put({
                   type: 'common/setHeader/success',
                   payload: payload
               })
             } catch(e) {}
       },

}