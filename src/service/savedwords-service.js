
import { createAsyncThunk } from "@reduxjs/toolkit";

import $api from '../http';


class SavedWordsService {


   static get_language_pair_stats_by_lang = createAsyncThunk(
        '/words/dashboard/stats/lang',
        async ({ from_lang, to_lang }, thunkAPI) => {
            try {
                const response = await $api.get(`/words/dashboard/stats/lang/`, {
                    params: {
                        from_lang: from_lang,
                        to_lang: to_lang,
                    },
                });
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }

        });

    
    static get_filter_by_part_of_speech = createAsyncThunk(
        '/words/filter/pos',
        async ({ from_lang, to_lang, partOfSpeech }, thunkAPI) => {
            try {
                const response = await $api.get(`/words/filter/pos/`, {
                    params: {
                        from_lang: from_lang,
                        to_lang: to_lang,
                        part_of_speech: partOfSpeech,
                    },
                });
                console.log('first', response);
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }

        });

    


    static get_filter_by_word = createAsyncThunk(
        '/words/dashboard/filter/word',
        async ({ word }, thunkAPI) => {
            try {
                const response = await $api.get(`/words/dashboard/filter/word/`, {
                    params: {
                        word: word,
                    },
                });
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }

        });
    

    static change_word_status = createAsyncThunk(
        '/words/set_status',
        async ({ word_id, status }, thunkAPI) => {
            const data = {
                word_id: word_id,
                w_status: status,
            }
            console.log('data us {}', data);
            try {
                const response = await $api.post(`/words/set_status`, data);
                console.log('response is {}', response);
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }

        });

}


export default SavedWordsService;