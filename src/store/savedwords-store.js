

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import SavedWordsService from '../service/savedwords-service';

const initialState = {

    language_pair_stats_by_lang: [],
    language_pair_stats_by_lang_pending: false,


    pos_filtered_words_pending: false,
    pos_filtered_words: [],

}

export const savedWordsSlice = createSlice({
    name: 'savedWords',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {


        // SavedWordsService get_language_pair_stats_by_lang
        builder.addCase(SavedWordsService.get_language_pair_stats_by_lang.pending, (state, action) => {
            state.language_pair_stats_by_lang_pending = true;
        })
        builder.addCase(SavedWordsService.get_language_pair_stats_by_lang.fulfilled, (state, action) => {
            state.language_pair_stats_by_lang = action.payload.payload;
            state.language_pair_stats_by_lang_pending = false;
        });
        builder.addCase(SavedWordsService.get_language_pair_stats_by_lang.rejected, (state, action) => {
            state.language_pair_stats_by_lang_pending = false;
            state.language_pair_stats_by_lang = [];
        });



        // SavedWordsService get_filter_by_part_of_speech
        builder.addCase(SavedWordsService.get_filter_by_part_of_speech.pending, (state, action) => {
            state.language_pair_stats_by_lang_pending = true;
        })
        builder.addCase(SavedWordsService.get_filter_by_part_of_speech.fulfilled, (state, action) => {
            state.language_pair_stats_by_lang.words = action.payload.payload;
            state.language_pair_stats_by_lang_pending = false;
        });
        builder.addCase(SavedWordsService.get_filter_by_part_of_speech.rejected, (state, action) => {
            state.language_pair_stats_by_lang_pending = false;
            state.language_pair_stats_by_lang = [];
        });
    
    
    
    
    },

});

export const {  } = savedWordsSlice.actions;

export default savedWordsSlice.reducer;