import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader } from '../Api/api';

// Helper function to set auth header
const setAuthorizationHeader = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    setAuthHeader(token, api);
  }
};

export const submitTask = createAsyncThunk(
  'submissions/submitTask',
  async ({ taskId, githubLink }) => {
    setAuthorizationHeader();
    try {
      const response = await api.post(
        `/api/submissions`,
        { task_id: taskId, github_link: githubLink }
      );
      console.log("submitted task", response.data);
      return response.data;
    } catch (error) {
      console.log("catch error ", error);
      throw error.response ? error.response.data : error;
    }
  }
);

export const fetchAllSubmissions = createAsyncThunk(
  'submissions/fetchAllSubmissions',
  async () => {
    setAuthorizationHeader();
    try {
      const response = await api.get("/api/submissions");
      console.log("fetch all submissions ", response.data);
      return response.data;
    } catch (error) {
      console.log("catch error ", error);
      throw error.response ? error.response.data : error;
    }
  }
);

export const fetchSubmissionsByTaskId = createAsyncThunk(
  'submissions/fetchSubmissionsByTaskId',
  async ({ taskId }) => {
    setAuthorizationHeader();
    try {
      const response = await api.get(`/api/submissions/task/${taskId}`);
      console.log("fetch submissions by task ID ", response.data);
      return response.data;
    } catch (error) {
      console.log("catch error ", error);
      throw error.response ? error.response.data : error;
    }
  }
);

export const acceptDeclineSubmission = createAsyncThunk(
  'submissions/acceptDeclineSubmission',
  async ({ id, status }) => {
    setAuthorizationHeader();
    try {
      const response = await api.put(`/api/submissions/${id}`, { status });
      console.log("accept or decline submission ", response.data);
      return response.data;
    } catch (error) {
      console.log("catch error ", error);
      throw error.response ? error.response.data : error;
    }
  }
);

const submissionSlice = createSlice({
  name: 'submission',
  initialState: {
    submissions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submissions.push(action.payload);
      })
      .addCase(submitTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAllSubmissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllSubmissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submissions = action.payload;
      })
      .addCase(fetchAllSubmissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSubmissionsByTaskId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubmissionsByTaskId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submissions = action.payload;
      })
      .addCase(fetchSubmissionsByTaskId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(acceptDeclineSubmission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submissions = state.submissions.map((item) => item.id !== action.payload.id ? item : action.payload);
      })
      .addCase(acceptDeclineSubmission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default submissionSlice.reducer;
