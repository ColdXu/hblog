import * as apiArticle from '../../../common/api/article';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
    name: 'article',
    effects: {
        //  获取列表
        *getArticleList({payload}) {
            try {
               const data = yield call(apiArticle.getArticleList, payload);
               yield put({
                   type: 'article/getArticleList/success',
                   payload: data
               })
             } catch(e) {}
       },

       //  获取文章
       *getArticle({payload}) {
        try {
           const data = yield call(apiArticle.getArticle, payload);
           yield put({
               type: 'article/getArticle/success',
               payload: data
           })
         } catch(e) {}
   },

       
    }
}