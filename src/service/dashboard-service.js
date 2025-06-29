

import { createAsyncThunk } from "@reduxjs/toolkit";

import $api from '../http';


class DashboardService {

    static get_language_pair_stats = createAsyncThunk(
        '/words/dashboard/stats',
        async (thunkAPI) => {
            try {
                const response = await $api.get(`/words/dashboard/stats`);

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

export default DashboardService;