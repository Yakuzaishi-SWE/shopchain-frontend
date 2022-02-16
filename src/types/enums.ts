

export enum OrderState {
    NOT_CREATED = "0",
    CREATED = "1",
    FILLED = "2",
    CLOSED = "3",
    CANCELLED = "4",
}

export enum LoadingState {
    NOT_LOADING = 0,
    LOADING = 1,
    LOADED_OK = 2,
    LOADED_ERROR = 3,
}

export enum MetamaskErrorSeverity {
    OK,
    UNBLOCKING,
    BLOCKING,
}

export enum MetamaskErrorName {
    OK = "OK",
    METAMASK_NOT_INSTALLED = "METAMASK_NOT_INSTALLED",
    NOT_CONNECTED = "NOT_CONNECTED",
    WRONG_CHAIN = "WRONG_CHAIN",
}