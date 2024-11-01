import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const slice = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({}),
	endpoints: (builder) => ({
		test: builder.query<any, void>({
			query: () => ({
				url: `/user`,
			}),
		}),
	}),
});

export const { useTestQuery } = slice;
