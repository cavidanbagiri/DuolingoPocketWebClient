

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import SavedWordsService from '../service/savedwords-service';

const initialState = {

    language_pair_stats_by_lang: [],
    language_pair_stats_by_lang_pending: false,


    pos_filtered_words_pending: false,
    pos_filtered_words: [],

    changed_word_staus: {},

}

export const savedWordsSlice = createSlice({
    name: 'savedWords',
    initialState,
    reducers: {

        // Check if changed_word_staus is not empty, set to false
        setChangedWordStatusFalse: (state, action) => {
            state.changed_word_staus.show = false;
        },


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
        
        
        // SavedWordService change word status
        builder .addCase(SavedWordsService.change_word_status.pending, (state, action) => {
            state.changed_word_staus.pending = true;
        });
        builder.addCase(SavedWordsService.change_word_status.fulfilled, (state, action) => {
            state.changed_word_staus.pending = false; 
            state.language_pair_stats_by_lang.words.forEach((item, index) => {
                if (item.id === action.payload.payload.word_id) {
                    if (action.payload.payload.w_status === 'starred') {
                        item.starred = !item.starred;
                    }
                    else if (action.payload.payload.w_status === 'learned' || action.payload.payload.w_status === 'delete') {
                        state.language_pair_stats_by_lang.words.splice(index, 1);
                    }
                    state.changed_word_staus.message = action.payload.payload.detail;
                    state.changed_word_staus.show = true;
                    state.changed_word_staus.color = 'bg-green-500';
                    
                }
            });
        });
        builder.addCase(SavedWordsService.change_word_status.rejected, (state, action) => {
            state.changed_word_staus.pending = false; 
            state.changed_word_staus.message = action.payload.payload.detail;
            state.changed_word_staus.show = true;
            state.changed_word_staus.color = 'bg-red-500';
        });

    
    
    },

});

export const { setChangedWordStatusFalse } = savedWordsSlice.actions;

export default savedWordsSlice.reducer;