import * as apiArticle from '../../../common/api/article';
import { call, put, take } from 'redux-saga/effects'
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
        //  获取列表
        *getAdminArticle({payload}) {
            try {
               const data = yield call(apiArticle.getAdminArticle, payload);
               yield put({
                   type: 'article/getAdminArticle/success',
                   payload: data
               })
             } catch(e) {}
       },

        //  获取列表
        *getAdminArticleList() {
             try {
                const data = yield call(apiArticle.getAdminArticleList);
                yield put({
                    type: 'article/getAdminArticleList/success',
                    payload: data
                })
              } catch(e) {}
        },

        // 创建博文
        *createAdminArticle({payload}) {
            try {
               const data = yield call(apiArticle.createAdminArticle, payload);
               message.success('保存成功')
               history.push(`/article/create/${data.data.id}`)
             } catch(e) {}
       },

        //  修改博文
       *putAdminArticle({payload}) {
            try {
            const data = yield call(apiArticle.putAdminArticle, payload);
            message.success('修改成功')
            } catch(e) {}
        },

        //  修改博文状态
       *putAdminArticleStatus({payload}) {
            try {
                const data = yield call(apiArticle.putAdminArticleStatus, payload);
                if (payload.status === 'publish') {
                    message.success('发布成功')
                } else {
                    message.success('撤回成功')
                }
                yield put({
                    type: 'article/putAdminArticleStatus/success',
                    payload: {
                        id: payload.id,
                    }
                })
                
            } catch(e) {}
        },

         //清空编辑文件内容
       *clearArticle() {
            yield put({
                type: 'article/setArticle',
                payload: {}
            })
        },
}