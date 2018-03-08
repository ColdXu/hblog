import * as apiArticle from '../../../common/api/article';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
    name: 'article',
    effects: {
        *getAdminArticleList() {
             try {
                const data = yield call(apiArticle.getAdminArticleList);
                yield put({
                    type: 'article/getAdminArticleList/success',
                    payload: data
                })
              } catch(e) {
                yield put({
                    type: 'article/getAdminArticleList/failure',
                })
            }
        },

        *createAdminArticle({payload}) {
            try {
               const data = yield call(apiArticle.createAdminArticle, payload);
               message.success('保存成功')
            //    yield put({
            //        type: 'article/createAdminArticle/success',
            //        payload: data
            //    })
             } catch(e) {
            //    yield put({
            //        type: 'article/createAdminArticle/failure',
            //    })
           }
       },
    }
}