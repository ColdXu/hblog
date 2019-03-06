import { call, put, take } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as apiTags from '../../../common/api/tags';
import history from '../../../common/util/history';
import message from '../../../common/component/message';

export default {
    name: 'tags',
    effects: {
        * getTags({ payload }) {
            try {
                const data = yield call(apiTags.getTags);
                yield put({
                    type: 'tags/getTags/success',
                    payload: data.data,
                });
            } catch (e) {}
        },

    },
};
