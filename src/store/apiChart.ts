
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

interface iChart {time: string[], values: number[]}

export const apiChart = createApi({
	reducerPath: 'chart',
	baseQuery: fetchBaseQuery({baseUrl: 'http://asuprog.ru'}),
	endpoints: build =>
	({
		load: build.query<iChart, void>({
			query: () => ({url: '/g.php', params: {g: 'g1'}}),
			transformResponse: (response: any) => response.t.reduce((acc: iChart, cur: string[]) =>
			{
				function d1(s: string) { return s.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') }

				acc.time.push(d1(cur[0]));
				acc.values.push(parseFloat(cur[1]));

				return acc;
			}, {time: [], values: []})
		})
	})
})
