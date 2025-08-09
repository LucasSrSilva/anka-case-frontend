import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
	baseURL,
});

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
	const response = await api.get<T>(url, config);
	return response.data;
};

export const post = async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
	const response = await api.post<T>(url, data, config);
	return response.data;
};

export const put = async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
	const response = await api.put<T>(url, data, config);
	return response.data;
};

export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
	const response = await api.delete<T>(url, config);
	return response.data;
};
