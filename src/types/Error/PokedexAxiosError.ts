import { AxiosError, InternalAxiosRequestConfig } from "axios";

export interface PokedexAxiosError extends AxiosError {
    customMessage: string;
}