
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import DashboardService from '../service/dashboard-service';

const initialState = {
    language_pair_stats: [],
    language_pair_stats_pending: false,

}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLanguagePairStats: (state, action) => {
            state.language_pair_stats = action.payload;
        },
        setIsLoading: (state, action) => {
            state.is_loading = action.payload;
        },
    },
    extraReducers: (builder) => {


        // DashboardService get_language_pair_stats
        builder.addCase(DashboardService.get_language_pair_stats.pending, (state, action) => {
            state.language_pair_stats_pending = true;
        })
        builder.addCase(DashboardService.get_language_pair_stats.fulfilled, (state, action) => {
            state.language_pair_stats = action.payload.payload;
            state.language_pair_stats_pending = false;
        });
        builder.addCase(DashboardService.get_language_pair_stats.rejected, (state, action) => {
            state.language_pair_stats_pending = false;
            state.language_pair_stats = [];
        });

    },


});

export const { setLanguagePairStats, setIsLoading } = dashboardSlice.actions;

export default dashboardSlice.reducer;
